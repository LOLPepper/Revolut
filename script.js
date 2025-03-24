document.getElementById('generateBtn').addEventListener('click', generateWebsite);
document.getElementById('editBtn').addEventListener('click', toggleEditor);
document.getElementById('saveChangesBtn').addEventListener('click', saveChanges);

let generatedContent = {
    title: "My Awesome Website",
    content: "Welcome to my awesome website! This is a generated page that you can edit."
};

function generateWebsite() {
    // Generate website based on template
    const websiteContainer = document.getElementById('generatedWebsite');
    websiteContainer.innerHTML = `
        <h2>${generatedContent.title}</h2>
        <p>${generatedContent.content}</p>
    `;
}

function toggleEditor() {
    const editor = document.getElementById('editor');
    editor.style.display = (editor.style.display === 'none') ? 'block' : 'none';
    
    // Load current content into the editor
    document.getElementById('pageTitle').value = generatedContent.title;
    document.getElementById('pageContent').value = generatedContent.content;
}

function saveChanges() {
    // Save the changes from the editor
    const newTitle = document.getElementById('pageTitle').value;
    const newContent = document.getElementById('pageContent').value;

    generatedContent.title = newTitle;
    generatedContent.content = newContent;

    // Refresh the website content with the updated content
    generateWebsite();

    // Close the editor
    toggleEditor();
}
