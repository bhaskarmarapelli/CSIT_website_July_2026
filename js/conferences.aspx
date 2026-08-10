<%@ Page Language="C#" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Research Papers & Conferences — CS&IT KL University</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="css/style.css"/>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"/>
  <style>
    .paper-card {
      background: white;
      border: 1px solid #dee2e6;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 18px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      transition: all 0.3s;
    }
    .paper-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.12);
      border-color: #f4a800;
    }
    .paper-title {
      font-size: 16.5px;
      font-weight: 600;
      color: #1a2e5a;
      margin-bottom: 10px;
      line-height: 1.4;
    }
    .faculty-name {
      font-weight: 700;
      color: #a12d33;
    }
    .meta {
      font-size: 13.5px;
      color: #555;
      margin: 8px 0;
    }
    .ay-badge {
      background: #f4a800;
      color: #1a2e5a;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 700;
      display: inline-block;
      margin-bottom: 12px;
    }
    .sl-no {
      font-weight: 700;
      color: #a12d33;
      width: 40px;
      display: inline-block;
    }
  </style>
</head>
<body data-page="research">
<div id="site-nav"></div>

<!-- Page Banner -->
<div style="background:linear-gradient(135deg,#a12d33 0%,#7a1520 100%);padding:22px 0 16px;border-bottom:3px solid #f4a800;">
  <div class="container">
    <div style="color:#fff;font-size:22px;font-weight:700;margin-bottom:6px;">Research Publications</div>
    <div style="color:rgba(255,255,255,.7);font-size:13px;">
      <a href="index.aspx" style="color:#f4a800;font-weight:600;">Home</a> &rsaquo; Research Papers & Conferences
    </div>
  </div>
</div>

<div class="page-content">
  <div class="container">
    <div class="content-grid">
      <div class="sidebar">
        <div class="sidebar-title">Research & Achievements</div>
        <ul>
          <li><a href="faculty-awards.aspx">Faculty Awards</a></li>
          <li><a href="fdps.aspx">FDPs & Workshops</a></li>
          <li><a href="research-papers.aspx" class="active">Research Papers</a></li>
        </ul>
      </div>

      <div class="content-area">
        <div class="content-banner">
          <div class="banner-text">
            <h2>Research Papers & Conference Presentations</h2>
            <p>Academic Year-wise Publications by CS&IT Faculty</p>
          </div>
        </div>

        <div id="researchContainer"></div>
      </div>
    </div>
  </div>
</div>

<div id="site-footer"></div>

<script src="js/data.js"></script>
<script src="js/nav.js"></script>
<script>
// Hardcoded research papers data (you can later move this to data.js if needed)
const researchPapers = [
  { sl:1, facultyId:"5291", name:"Dr AMARENDRA K", ay:"2022–2023", conference:"INTERNATIONAL CONFERENCE ON COMPUTING METHODOLOGIES AND COMMUNICATION (ICCMC 2023)", title:"NATURAL LANGUAGE PROCESSING USING CONVOLUTIONAL NEURAL NETWORKS" },
  { sl:2, facultyId:"5291", name:"Dr AMARENDRA K", ay:"2022–2023", conference:"INTERNATIONAL CONFERENCE ON COMPUTING METHODOLOGIES AND COMMUNICATION (ICCMC 2023)", title:"MEDICAL MODEL BUILT ON MACHINE LEARNING TO EVALUATING THE RELATIONSHIP BETWEEN THE DEPRESSION AND LIVING STANDARDS" },
  { sl:3, facultyId:"5291", name:"Dr AMARENDRA K", ay:"2022–2023", conference:"2ND INTERNATIONAL CONFERENCE ON SUSTAINABLE COMPUTING AND DATA COMMUNICATION SYSTEMS (ICSCDS - 2023)", title:"COMPARATIVE STUDY ON FORECASTING TECHNIQUES BY USING CLOUD SERVICES" },
  { sl:4, facultyId:"5659", name:"Dr PVVS SRINIVAS", ay:"2022–2023", conference:"3RD INTERNATIONAL CONFERENCE ON SMART DATA INTELLIGENCE (ICSMDI 2023)", title:"DEEP LEARNING BASED LUMYS SKIN DISEASE (LSD) DETECTION" },
  { sl:5, facultyId:"6274", name:"Dr GANGA RAMA KOTESWARA RAO", ay:"2022–2023", conference:"2ND INTERNATIONAL CONFERENCE ON SUSTAINABLE COMPUTING AND DATA COMMUNICATION SYSTEMS (ICSCDS - 2023)", title:"APPLICATION OF BLOCKCHAIN TECHNOLOGY IN THE HEALTHCARE SYSTEMS" },
  { sl:6, facultyId:"6332", name:"Dr JYOTHI NM", ay:"2022–2023", conference:"IEEE WISSCON 2023", title:"AI MODEL FOR BIRD SPECIES PREDICTION WITH DETECTION OF RARE, MIGRATORY AND EXTINCTION BIRDS USING ELM BOOSTED BY OBS" },
  { sl:7, facultyId:"7367", name:"Dr M BHASKAR MARAPELLI", ay:"2023-2024", conference:"ICDSNE - 2023 - INTERNATIONAL CONFERENCE ON DATA SCIENCE AND NETWORK ENGINEERING", title:"ENHANCING AGRICULTURAL DECISION MAKING THROUGH MACHINE LEARNING BASED CROP YIELD PREDICTIONS" },
  { sl:8, facultyId:"5291", name:"Dr AMARENDRA K", ay:"2023-2024", conference:"5th International Conference on Inventive Research in Computing Applications, ICIRCA 2023", title:"Enhanced Texture Analysis to Detect Fabric Stain Using Deep Learning and Gabor Filter" },
  { sl:9, facultyId:"7946", name:"N PRAVEENA", ay:"2023-2024", conference:"7TH INTERNATIONAL CONFERENCE ON ELECTRONICS, COMMUNICATION AND AEROSPACE TECHNOLOGY (ICECA-2023)", title:"NOVEL METHOD FOR ATTENDANCE MARKING SYSTEM USING HYBRID LSTM AND RNN BASED NETWORKS" },
  { sl:10, facultyId:"5291", name:"Dr AMARENDRA K", ay:"2023-2024", conference:"2ND INTERNATIONAL CONFERENCE ON COMMUNICATION, SECURITY AND ARTIFICIAL INTELLIGENCE (ICCSAI - 2023)", title:"AUTOMATED LEUKAEMIA PREDICTION AND CLASSIFICATION USING DEEP LEARNING TECHNIQUES" },
  { sl:11, facultyId:"7937", name:"DR G KADIRAVAN", ay:"2024-2025", conference:"International Conference on Contemporary Computing and Informatics, IC3I, 2023", title:"Research and Innovation in Next Generation Security and Privacy in Industry 5.0" },
  { sl:12, facultyId:"7937", name:"DR G KADIRAVAN", ay:"2024-2025", conference:"International Conference on System, Computation, Automation and Networking, ICSCAN 2023", title:"Dynamic Network Intrusion Detection System for Virtual Machine Environment" },
  { sl:13, facultyId:"8932", name:"MS LAVANYA SUSANNA", ay:"2024-2025", conference:"4TH INTERNATIONAL CONFERENCE ON UBIQUITOUS COMPUTING AND INTELLIGENT INFORMATION SYSTEMS (ICUIS 2024)", title:"ADAPTIVE FEDERATED LEARNING FOR EFFICIENT NETWORK TRAFFIC MANAGEMENT IN EDGE COMPUTING" },
  { sl:14, facultyId:"7142", name:"DR ASHISH", ay:"2024-2025", conference:"3RD INTERNATIONAL CONFERENCE ON OPTIMIZATION TECHNIQUES IN THE FIELD OF ENGINEERING (ICOFE-2024)", title:"NEXT-GEN OPTIMIZATION OF IOT-POWERED SMART INFRASTRUCTURE IN INDUSTRY 4.0" },
  { sl:16, facultyId:"9469", name:"G.Muni Nagamani", ay:"2025-2026", conference:"International Conference on Innovative Emerging Technologies (ICIET-2025)", title:"Development of An Intuitive Model Integrating Dynamic Socio-Linguistic Quantification and Escalation Mapping for Real-Time Hate Speech Mitigation in Low-Resource Languages" }
];

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("researchContainer");

  // Group by Academic Year (newest first)
  const grouped = {};
  researchPapers.forEach(paper => {
    const year = paper.ay || "2025-2026";
    if (!grouped[year]) grouped[year] = [];
    grouped[year].push(paper);
  });

  let html = '';

  Object.keys(grouped).sort((a,b) => b.localeCompare(a)).forEach(year => {
    html += `
      <h3 style="margin:35px 0 18px; color:#1a2e5a; border-bottom:2px solid #f4a800; padding-bottom:10px;">
        <i class="fas fa-calendar-alt"></i> Academic Year ${year}
      </h3>`;

    grouped[year].forEach(p => {
      html += `
        <div class="paper-card">
          <span class="ay-badge">${p.ay}</span>
          <div class="paper-title">
            <span class="sl-no">${p.sl}.</span> ${p.title}
          </div>
          <div class="meta">
            <strong class="faculty-name">${p.name}</strong> 
            <span style="color:#666;">(Faculty ID: ${p.facultyId})</span>
          </div>
          <div class="meta" style="color:#555;">
            <i class="fas fa-book"></i> ${p.conference}
          </div>
        </div>`;
    });
  });

  container.innerHTML = html || '<p style="text-align:center;color:#999;padding:50px;">No research papers found.</p>';
});
</script>
</body>
</html>