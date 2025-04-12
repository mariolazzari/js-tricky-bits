(function () {
  // Simple array
  const band = [
    "Renee Rosnes",
    "Anat Cohen",
    "Melissa Aldana",
    "Ingrid Jensen",
    "Noriko Ueda",
    "Allison Miller",
    "Cécile McLorin Salvant",
  ];

  for (let i = 0; i < band.length; i++) {
    const member = band[i];
    console.log(member);
  }

  // Nested array
  const bands = [
    [
      "Renee Rosnes",
      "Anat Cohen",
      "Melissa Aldana",
      "Ingrid Jensen",
      "Noriko Ueda",
      "Allison Miller",
      "Cécile McLorin Salvant",
    ],
    [
      "Miles Davis",
      "Wayne Shorter",
      "Herbie Hancock",
      "Ron Carter",
      "Tony Williams",
    ],
    ["Chick Corea", "Miroslav Vitous", "Roy Haynes"],
  ];

  for (let b = 0; b < bands.length; b++) {
    const band = bands[b];

    for (let c = 0; c < band.length; c++) {
      console.log(c);
    }
  }
})();
