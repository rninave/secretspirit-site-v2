// Service helpers for contact form submissions

type FormName = 'business' | 'career' | 'other';

// Field mappings to readable labels for Web3Forms emails
const fieldMappings: Record<FormName, Record<string, string>> = {
  business: {
    access_key: 'access_key',
    subject: 'subject',
    from_name: 'from_name',
    fullName: 'User name',
    email: 'Email',
    company: 'Company name', // Maps company -> Company name
    phone: 'Phone',
    projectDescription: 'Project Description',
  },
  career: {
    access_key: 'access_key',
    subject: 'subject',
    from_name: 'from_name',
    fullName: 'User name',
    email: 'Email',
    phone: 'Phone',
    position: 'Position',
    experience: 'Experience',
    linkedin: 'LinkedIn Profile', // Maps linkedin -> LinkedIn Profile
    portfolio: 'Portfolio URL', // Maps portfolio -> Portfolio URL
    resume: 'Resume Download Link',
    coverLetter: 'Cover Letter',
  },
  other: {
    access_key: 'access_key',
    from_name: 'from_name',
    fullName: 'User name',
    email: 'Email',
    phone: 'Phone',
    subjectdetails: 'Subject Details', // Maps subjectdetails -> Subject Details
    message: 'Message',
  },
};

// Access keys - Business uses different key
const API_BUSINESS_KEY = '30f67c85-131a-4ed2-9c36-6a766a3b535b';
const API_KEY = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY || '30f67c85-131a-4ed2-9c36-6a766a3b535b';

/**
 * Uploads a file to Cloudinary and returns a downloadable link
 * @param file - The file to upload
 * @returns The downloadable link URL based on asset_id
 */
export async function uploadToCloudinary(file: File): Promise<string> {
  const cloudName = 'drlfqcotp';
  const uploadPreset = 'form_submission';
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', uploadPreset);

  const res = await fetch(url, {
    method: 'POST',
    body: fd,
  });

  if (!res.ok) {
    throw new Error('Failed to upload file to Cloudinary');
  }

  const data = await res.json();
  
  // Use asset_id to create downloadable link (matching Angular implementation)
  const asset_id = data?.asset_id || '';
  if (!asset_id) {
    throw new Error('Asset ID is missing in the upload response');
  }
  
  return `https://res-console.cloudinary.com/${cloudName}/media_explorer_thumbnails/${asset_id}/download`;
}

/**
 * Maps form field names to readable labels for Web3Forms email formatting
 * @param formName - Type of form (business, career, other)
 * @param formData - Original FormData with field names
 * @returns New FormData with mapped field names
 */
function makeReadableFormFields(formName: FormName, formData: FormData): FormData {
  const mappings = fieldMappings[formName];
  if (!mappings) {
    throw new Error(`No field mappings found for form: ${formName}`);
  }

  const newFormData = new FormData();

  // Map each field to its readable label
  formData.forEach((value, key) => {
    if (key in mappings) {
      newFormData.append(mappings[key], value);
    } else {
      // Keep unmapped fields as-is (for system fields like form_name, etc.)
      newFormData.append(key, value);
    }
  });

  return newFormData;
}

/**
 * Submits form data to Web3Forms with proper formatting
 * @param formData - FormData object containing form fields (already mapped to readable labels)
 * @param formType - Type of form ('Business', 'Career', 'Other')
 * @returns Response from Web3Forms API
 */
export async function submitToW3Forms(formData: FormData, formType: string = 'general') {
  try {
    // Use appropriate access key based on form type
    const accessKey = formType === 'Business' ? API_BUSINESS_KEY : API_KEY;
    formData.set('access_key', accessKey);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || 'Web3Forms submission failed');
    }

    const json = await res.json();
    return json;
  } catch (err) {
    console.error('submitToW3Forms error', err);
    return { success: false, message: err instanceof Error ? err.message : 'Network error' };
  }
}

/**
 * Submits a Career form with file upload handling
 * First uploads resume to Cloudinary, then submits form to Web3Forms with proper formatting
 * @param formData - FormData object containing form fields including resume file
 * @param fullName - User's full name for subject line
 * @returns Response from Web3Forms API
 */
export async function submitCareerForm(formData: FormData, fullName?: string) {
  try {
    // Extract resume file from form data
    const resumeFile = formData.get('resume') as File | null;
    
    // If resume file exists and is valid, upload to Cloudinary first
    if (resumeFile && resumeFile instanceof File && resumeFile.size > 0) {
      try {
        const cloudUrl = await uploadToCloudinary(resumeFile);
        // Replace file with Cloudinary URL
        formData.set('resume', cloudUrl);
      } catch (uploadError) {
        console.error('Cloudinary upload error', uploadError);
        return { 
          success: false, 
          message: uploadError instanceof Error ? uploadError.message : 'Failed to upload resume' 
        };
      }
    }

    // Set form metadata for email formatting
    const userName = fullName || formData.get('fullName')?.toString() || 'User';
    formData.set('form_name', 'Career');
    formData.set('subject', `New Job Application Received: ${userName}`);
    formData.set('from_name', 'Secretspirit Site');
    
    // Map field names to readable labels
    const mappedFormData = makeReadableFormFields('career', formData);
    
    // Submit to Web3Forms
    return await submitToW3Forms(mappedFormData, 'Career');
  } catch (err) {
    console.error('submitCareerForm error', err);
    return { 
      success: false, 
      message: err instanceof Error ? err.message : 'Failed to submit career form' 
    };
  }
}

/**
 * Submits a Business form with proper formatting
 * @param formData - FormData object containing form fields
 * @param fullName - User's full name for subject line
 * @returns Response from Web3Forms API
 */
export async function submitBusinessForm(formData: FormData, fullName?: string) {
  try {
    // Set form metadata for email formatting
    const userName = fullName || formData.get('fullName')?.toString() || 'User';
    formData.set('form_name', 'Business');
    formData.set('subject', `You've Received a New Business Inquiry from ${userName}`);
    formData.set('from_name', 'Secretspirit Site');
    
    // Map field names to readable labels
    const mappedFormData = makeReadableFormFields('business', formData);
    
    // Submit to Web3Forms
    return await submitToW3Forms(mappedFormData, 'Business');
  } catch (err) {
    console.error('submitBusinessForm error', err);
    return { 
      success: false, 
      message: err instanceof Error ? err.message : 'Failed to submit business form' 
    };
  }
}

/**
 * Submits an Other form with proper formatting
 * @param formData - FormData object containing form fields
 * @param fullName - User's full name for subject line
 * @returns Response from Web3Forms API
 */
export async function submitOtherForm(formData: FormData, fullName?: string) {
  try {
    // Set form metadata for email formatting
    const userName = fullName || formData.get('fullName')?.toString() || 'User';
    
    // Rename user's subject input to subjectdetails to match mapping
    const userSubject = formData.get('subject')?.toString();
    if (userSubject) {
      formData.delete('subject');
      formData.set('subjectdetails', userSubject);
    }
    
    formData.set('form_name', 'Other');
    formData.set('subject', `You've Received a New Other Inquiry from ${userName}`);
    formData.set('from_name', 'Secretspirit Site');
    
    // Map field names to readable labels
    const mappedFormData = makeReadableFormFields('other', formData);
    
    // Submit to Web3Forms
    return await submitToW3Forms(mappedFormData, 'Other');
  } catch (err) {
    console.error('submitOtherForm error', err);
    return { 
      success: false, 
      message: err instanceof Error ? err.message : 'Failed to submit other form' 
    };
  }
}

export async function submitInquiryEmail(email: string) {
  const fd = new FormData();
  fd.append('email', email);
  fd.append('message', 'Inquiry via footer contact form');

  return submitToW3Forms(fd, 'inquiry');
}
