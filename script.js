//download หลอกๆ
function downloadTool(toolName) {
    alert(`Downloading ${toolName}...`);
}

function contactUs() {
    alert(`### Contact_info ###
Email: Patcharaalumaree@gmail.com
GitHub: https://github.com/MrPatchara`);
}

//download ของจริง tool1
document.getElementById('downloadButton1').addEventListener('click', function() {
    const fileName = 'Download_Program_py_to_exe.zip'; // ชื่อไฟล์ที่ต้องการดาวน์โหลด
    const filePath = `https://github.com/MrPatchara/tool-website/tree/main/tool1`; // เส้นทางไปยังไฟล์ที่ต้องการดาวน์โหลด

    // สร้างลิงก์ดาวน์โหลดชั่วคราว
    const link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    
    // เพิ่มลิงก์ลงในเอกสารแล้วคลิกเพื่อเริ่มดาวน์โหลด
    document.body.appendChild(link);
    link.click();
    
    // ลบลิงก์หลังจากดาวน์โหลดเสร็จสิ้น
    document.body.removeChild(link);
});
