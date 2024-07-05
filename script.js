//download หลอกๆ
function downloadTool(toolName) {
    alert(`Downloading ${toolName}...`);
}

function contactUs() {
    alert(`### Contact_info ###
Email: Patcharaalumaree@gmail.com
GitHub: https://github.com/MrPatchara`);
}

document.getElementById('downloadButton1').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/file/d/1CoayGA76bFlM61vAxQnfNE5y5b2t97Le/view?usp=sharing';
});

document.getElementById('downloadButton2').addEventListener('click', function() {
    window.location.href = 'https://drive.google.com/file/d/1NDhSm3LZudVJUzZ1PXVkJUiEHHvd1pg8/view?usp=sharing';
});

