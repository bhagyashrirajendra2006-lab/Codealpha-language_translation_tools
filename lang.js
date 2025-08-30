// Google Translate initialization function
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'en', // Default language of your page
      includedLanguages: 'en,hi,mr,fr,de,es', // Languages you want to allow
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    },
    'google_translate_element'
  );
}