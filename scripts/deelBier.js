 document.querySelector(".deel").onclick = function() {
     const filename  = 'ThisIsYourPDFFilename.pdf';

     html2canvas(document.querySelector('html')).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 25, 25, 150, 100);
        //211,298
        pdf.save(filename);
     });
}