function downloadPDF(){
 makeCV();
 html2pdf().set({
  margin:10,
  filename:"my-cv.pdf",
  html2canvas:{scale:2},
  jsPDF:{unit:"mm",format:"a4"}
 }).from(document.getElementById("cv")).save();
}