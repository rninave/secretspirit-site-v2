// Service helpers for contact form submissions
export async function submitToW3Forms(formData: FormData, formType = 'general') {
  try {
    // attach form type and access key (keep same key used in project)
    formData.append('form_type', formType);
    formData.append('access_key', '30f67c85-131a-4ed2-9c36-6a766a3b535b');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const json = await res.json();
    return json;
  } catch (err) {
    console.error('submitToW3Forms error', err);
    return { success: false, message: 'Network error' };
  }
}

export async function submitInquiryEmail(email: string) {
  const fd = new FormData();
  fd.append('email', email);
  fd.append('message', 'Inquiry via footer contact form');

  return submitToW3Forms(fd, 'inquiry');
}
