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
    resume: 'Resume/CV URL',
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
const API_BUSINESS_KEY = 'e0f2354d-ba2b-42f7-af92-2002857dbb63';
const API_KEY = process.env.NEXT_PUBLIC_W3FORMS_ACCESS_KEY || 'cd1a1e40-e06c-4341-9a0c-e07df8a7cfd6';

/**
 * Uploads a file to Cloudinary and returns a downloadable link
 * @param file - The file to upload
 * @returns The downloadable link URL based on asset_id
 */
// NOTE: Resume uploads are handled as user-provided text URLs (e.g., Google Drive, Dropbox).
// The previous Cloudinary upload flow was removed — forms should submit a URL string in
// the `resume` field. This service will pass that URL through to Web3Forms.

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
    // Resume is provided as a text URL (e.g., Google Drive / Dropbox) in the `resume` field.
    // Ensure it's stored as a string value for Web3Forms submission.
    const resumeVal = formData.get('resume')?.toString() || '';
    if (resumeVal) {
      formData.set('resume', resumeVal);
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
