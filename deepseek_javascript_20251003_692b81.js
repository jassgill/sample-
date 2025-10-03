// Tool information data
const toolData = {
    'merge': {
        title: 'Merge PDF',
        description: 'Combine multiple PDF files into a single document in the order you prefer. Our tool preserves the original quality of your files.',
        icon: 'fas fa-object-group'
    },
    'split': {
        title: 'Split PDF',
        description: 'Separate one page or a whole set of pages from your PDF document. Extract specific pages or split by page ranges.',
        icon: 'fas fa-cut'
    },
    'compress': {
        title: 'Compress PDF',
        description: 'Reduce the file size of your PDF documents while optimizing for maximal quality. Perfect for sharing and storage.',
        icon: 'fas fa-compress-arrows-alt'
    },
    'organize': {
        title: 'Organize PDF',
        description: 'Rearrange, delete, or rotate pages in your PDF document. Organize your PDF exactly how you want it.',
        icon: 'fas fa-sort'
    },
    'protect': {
        title: 'Protect PDF',
        description: 'Add password protection to your PDF files to prevent unauthorized access. Keep your documents secure.',
        icon: 'fas fa-lock'
    },
    'unlock': {
        title: 'Unlock PDF',
        description: 'Remove password protection from PDF files that you have permission to access. Regain control of your documents.',
        icon: 'fas fa-unlock'
    },
    'watermark': {
        title: 'Watermark PDF',
        description: 'Add text or image watermarks to your PDF documents. Customize position, opacity, and appearance.',
        icon: 'fas fa-tint'
    },
    'number': {
        title: 'Number PDF',
        description: 'Add page numbers to your PDF documents. Choose from various formats, positions, and styles.',
        icon: 'fas fa-sort-numeric-down'
    },
    'annotate': {
        title: 'Annotate PDF',
        description: 'Add comments, highlights, and annotations to your PDF documents. Perfect for reviewing and collaboration.',
        icon: 'fas fa-highlighter'
    },
    'sign': {
        title: 'Sign PDF',
        description: 'Add digital signatures to your PDF documents. Create, draw, or upload your signature for secure signing.',
        icon: 'fas fa-signature'
    },
    'fill': {
        title: 'Fill & Sign Forms',
        description: 'Complete PDF forms electronically. Fill in text fields, check boxes, and add signatures where needed.',
        icon: 'fas fa-edit'
    },
    'repair': {
        title: 'Repair PDF',
        description: 'Fix corrupted or damaged PDF files. Restore access to PDFs that won\'t open properly.',
        icon: 'fas fa-tools'
    },
    'compare': {
        title: 'Compare PDF',
        description: 'Find differences between two PDF documents. Highlight changes in text, layout, and content.',
        icon: 'fas fa-code-compare'
    },
    'rotate': {
        title: 'Rotate PDF',
        description: 'Rotate PDF pages to correct orientation. Fix pages that are upside down or sideways.',
        icon: 'fas fa-redo'
    },
    'extract': {
        title: 'Extract Pages',
        description: 'Extract specific pages from your PDF document. Create a new PDF with only the pages you need.',
        icon: 'fas fa-file-export'
    },
    'pdf-to-word': {
        title: 'PDF to Word',
        description: 'Convert PDF files to editable Word documents. Preserve formatting, images, and layout.',
        icon: 'fas fa-file-word'
    },
    'word-to-pdf': {
        title: 'Word to PDF',
        description: 'Convert Word documents to PDF format. Maintain formatting and layout from your original document.',
        icon: 'fas fa-file-pdf'
    },
    'pdf-to-ppt': {
        title: 'PDF to PowerPoint',
        description: 'Convert PDF files to PowerPoint presentations. Create editable slides from your PDF content.',
        icon: 'fas fa-file-powerpoint'
    },
    'ppt-to-pdf': {
        title: 'PowerPoint to PDF',
        description: 'Convert PowerPoint presentations to PDF format. Preserve slide layouts and design elements.',
        icon: 'fas fa-file-pdf'
    },
    'pdf-to-excel': {
        title: 'PDF to Excel',
        description: 'Extract data from PDF tables to Excel spreadsheets. Convert PDF data to editable Excel format.',
        icon: 'fas fa-file-excel'
    },
    'excel-to-pdf': {
        title: 'Excel to PDF',
        description: 'Convert Excel spreadsheets to PDF documents. Preserve formulas, charts, and formatting.',
        icon: 'fas fa-file-pdf'
    },
    'pdf-to-txt': {
        title: 'PDF to TXT',
        description: 'Extract text from PDF files to plain text format. Convert PDF content to editable text.',
        icon: 'fas fa-file-alt'
    },
    'txt-to-pdf': {
        title: 'TXT to PDF',
        description: 'Convert text files to PDF documents. Create PDFs from .txt files with customizable formatting.',
        icon: 'fas fa-file-pdf'
    },
    'pdf-to-html': {
        title: 'PDF to HTML',
        description: 'Convert PDF files to HTML web pages. Create web-ready content from your PDF documents.',
        icon: 'fas fa-code'
    },
    'html-to-pdf': {
        title: 'HTML to PDF',
        description: 'Convert web pages to PDF documents. Capture web content as PDF files for offline use.',
        icon: 'fas fa-file-pdf'
    },
    'pdf-to-epub': {
        title: 'PDF to EPUB',
        description: 'Convert PDF files to EPUB eBook format. Create eBooks compatible with e-readers.',
        icon: 'fas fa-book'
    },
    'rtf-to-pdf': {
        title: 'RTF to PDF',
        description: 'Convert Rich Text Format files to PDF documents. Preserve formatting from RTF documents.',
        icon: 'fas fa-file-pdf'
    },
    'pdf-to-csv': {
        title: 'PDF to CSV',
        description: 'Convert PDF tables to CSV format. Extract tabular data for use in spreadsheet applications.',
        icon: 'fas fa-file-csv'
    },
    'csv-to-pdf': {
        title: 'CSV to PDF',
        description: 'Convert CSV files to PDF documents. Create formatted PDFs from comma-separated values.',
        icon: 'fas fa-file-pdf'
    },
    'pdf-to-xml': {
        title: 'PDF to XML',
        description: 'Convert PDF files to XML format. Extract structured data from PDF documents.',
        icon: 'fas fa-file-code'
    },
    'jpg-to-pdf': {
        title: 'JPG to PDF',
        description: 'Convert JPG images to PDF documents. Combine multiple images into a single PDF file.',
        icon: 'fas fa-file-image'
    },
    'pdf-to-jpg': {
        title: 'PDF to JPG',
        description: 'Convert PDF pages to JPG images. Extract images from PDF documents in high quality.',
        icon: 'fas fa-image'
    },
    'png-to-pdf': {
        title: 'PNG to PDF',
        description: 'Convert PNG images to PDF documents. Create PDFs from transparent PNG images.',
        icon: 'fas fa-file-image'
    },
    'pdf-to-png': {
        title: 'PDF to PNG',
        description: 'Convert PDF pages to PNG images. Extract high-quality images with transparency.',
        icon: 'fas fa-image'
    },
    'compress-image': {
        title: 'Compress Image',
        description: 'Reduce the file size of your images without significant quality loss. Optimize images for web and storage.',
        icon: 'fas fa-compress'
    },
    'resize-image': {
        title: 'Resize Image',
        description: 'Change the dimensions of your images. Resize to specific measurements or scale by percentage.',
        icon: 'fas fa-expand'
    },
    'crop-image': {
        title: 'Crop Image',
        description: 'Crop images to remove unwanted areas. Select the exact portion you want to keep.',
        icon: 'fas fa-crop'
    },
    'rotate-image': {
        title: 'Rotate Image',
        description: 'Rotate images to correct orientation. Fix images that are sideways or upside down.',
        icon: 'fas fa-redo'
    },
    'convert-image': {
        title: 'Convert Image',
        description: 'Convert between different image formats. Transform JPG, PNG, GIF, BMP, and more.',
        icon: 'fas fa-exchange-alt'
    },
    'watermark-image': {
        title: 'Watermark Image',
        description: 'Add watermarks to your images. Protect your photos with text or image watermarks.',
        icon: 'fas fa-tint'
    },
    'ai-summarize': {
        title: 'AI Summarize PDF',
        description: 'Generate concise summaries of PDF documents using artificial intelligence. Extract key points and insights.',
        icon: 'fas fa-robot'
    },
    'ai-translate': {
        title: 'AI Translate PDF',
        description: 'Translate PDF content to different languages using AI. Preserve formatting while translating text.',
        icon: 'fas fa-language'
    },
    'ai-edit': {
        title: 'AI Edit PDF',
        description: 'Edit PDF content with AI assistance. Rewrite, reformat, or enhance your PDF documents.',
        icon: 'fas fa-edit'
    },
    'ai-organize': {
        title: 'AI Organize PDF',
        description: 'Smart PDF organization with AI. Automatically detect and organize content, pages, and sections.',
        icon: 'fas fa-sort'
    },
    'ai-ocr': {
        title: 'AI OCR PDF',
        description: 'Extract text from scanned PDFs using AI-powered OCR. Convert image-based PDFs to searchable text.',
        icon: 'fas fa-eye'
    }
};

// Navigation functions
function showHomePage(event) {
    if (event) event.preventDefault();
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('toolInfoPage').style.display = 'none';
    document.getElementById('toolModal').style.display = 'none';
}

function showToolInfo(event, toolId) {
    if (event) event.preventDefault();
    
    const tool = toolData[toolId];
    if (tool) {
        document.getElementById('toolTitle').textContent = tool.title;
        document.getElementById('toolDescription').textContent = tool.description;
        
        // Update the tool icon
        const toolIcon = document.querySelector('.tool-info-icon i');
        toolIcon.className = tool.icon;
        
        document.getElementById('toolInfoPage').style.display = 'block';
        document.getElementById('homePage').style.display = 'none';
        
        // Update modal title for when user clicks "Use This Tool"
        document.getElementById('modalTitle').textContent = tool.title;
    }
}

function scrollToSection(event, sectionId) {
    if (event) event.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Modal functions
function openToolModal(event) {
    if (event) event.preventDefault();
    document.getElementById('toolModal').style.display = 'flex';
    document.getElementById('resultArea').style.display = 'none';
    document.getElementById('progressBar').style.display = 'none';
    document.getElementById('fileList').innerHTML = '';
}

function closeToolModal() {
    document.getElementById('toolModal').style.display = 'none';
}

// File handling functions
function processFiles() {
    // Show progress bar
    document.getElementById('progressBar').style.display = 'block';
    
    // Simulate processing
    let progress = 0;
    const interval = setInterval(() => {
        progress += 5;
        document.getElementById('progress').style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            // Show result area
            document.getElementById('resultArea').style.display = 'block';
        }
    }, 100);
}

// Info functions (for footer links)
function showPricingInfo(event) {
    if (event) event.preventDefault();
    alert('All our basic tools are 100% free! Premium features coming soon.');
}

function showLoginForm(event) {
    if (event) event.preventDefault();
    alert('Login functionality would be implemented here in a real application.');
}

function showSignupForm(event) {
    if (event) event.preventDefault();
    alert('Signup functionality would be implemented here in a real application.');
}

function showAboutInfo(event) {
    if (event) event.preventDefault();
    alert('PDF Mantra is a free online PDF and image tool platform.');
}

function showContactInfo(event) {
    if (event) event.preventDefault();
    alert('Contact us at support@pdfmantra.com');
}

function showPrivacyInfo(event) {
    if (event) event.preventDefault();
    alert('Privacy policy information would be displayed here.');
}

function showTermsInfo(event) {
    if (event) event.preventDefault();
    alert('Terms of service information would be displayed here.');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    showHomePage();
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('toolModal');
        if (event.target === modal) {
            closeToolModal();
        }
    });
});