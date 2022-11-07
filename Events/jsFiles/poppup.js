function togglePopup(id) {
    var blur = document.getElementById('blur0');
    blur.classList.toggle('active');
    var blur = document.getElementById('blur1');
    blur.classList.toggle('active');
    var blur = document.getElementById('blur2');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    var scrollbtn = document.getElementById('scrollbtn');
    scrollbtn.classList.toggle('active');
    var bodyScroll = document.querySelector("body");
    bodyScroll.classList.toggle('popupActive');



    move(0,0);
    trail.forEach(cur => cur.classList.remove("active"))
    trail[0].classList.add("active");
    value=0;
    trailValue=0;
    animate()
    


    var EveName = document.getElementById("EveName");
    var EveDetails = document.getElementById("EveDetails");
    var EveStructure = document.getElementById("EveStructure");
    var EveRules = document.getElementById("EveRules");
    var EveContact = document.getElementById("EveContact");
    var EveImg = document.querySelectorAll(".inner");

    switch (id) {
        case "SF":
            EveName.innerHTML = "Street Forward";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/street-forward.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>It is a Street style group dance competition.</li> <li>Team Size: Minimum 6 and Maximum 15</li> <li>Entry Fee: INR 600/- per team</li> <li>Styles: Any dance style like hip-hop, popping, tutting, krumping, breakdance, stepping, B-boying, contraptions, western freestyle, etc.</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<h4>Showcase round:</h4>" + "<ul> <li>All teams will perform in front of the judge.</li> <li>Time limit of each performance will be 4 - 7 minutes.</li> </ul>" + "<h4>Final Battle Round:</h4>" + "<ul> <li>The qualified teams from eliminations will face off in the battle round.</li> <li>On-spot tracks will be played by the judges.</li> <li>There are 3 sub rounds: ● Round 01: One participant from each crew will have to perform for 1 minute. ● Round 02: Two participants from each crew will have to perform for 1 minute 10 seconds. ● Round 03: Multiple members from each team will have to perform for 1 minute 30 seconds.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Only street dance forms are allowed.</li> <li>The music track should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li> <li>Participants may use more than one song in their performance.</li> <li>Props (except hazardous and dangerous materials) are allowed but will be based on the discretion of the organisers. A list of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>Following all necessary safety measures is the responsibility of the participants.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>Performance should be confined within the area (10-12 meters in diameter) i.e an open-air venue, with the audience on all sides.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Pranjali Jadhav -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Street Forward)</h5>" + "<br/>" + "<h5>Mob.- +91 8149101637</h5>";
            break;

        case "SD":
            EveName.innerHTML = "So-Duet";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/so-duet.jpg')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>It is an open genre (except classical and folk) solo and duet competition.</li> <li>Team Size: Solo or Duet</li> <li>Registration Fee: Solo: INR 100/- | Duet: INR 200/-</li> <li>Styles permitted: All except Classical and Folk Dance</li> <li>Dates: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<h2>Solo -</h2>" + "<h4>Eliminations:</h4>" + "<ul> <li>The contestants are required to present a 100 seconds dance performance in front of the judges.</li> <li>The participants who get selected, will move to the next round.</li> </ul>" + "<h4>Finals:</h4>" + "<ul> <li>Participants shortlisted for this round will perform in front of the judges.</li> <li>Participants can perform an extended version of their eliminations performance or a new one all together.</li> <li>Time Limit: 2 - 4 minutes including setup time</li> </ul>" + "<br/>" + "    <h2>Duet -</h2>" + "<h4>Eliminations:</h4>" + "<ul><li>The contestants are required to present a 100 seconds dance performance in front of the judges.</li><li>The participants who get selected, will move to the next round.</li> </ul>" + "<h4>Finals:</h4>" + "<ul> <li>Participants shortlisted have to perform an extended version of their eliminations performance or a new one all together.</li> <li>Time Limit: 2 - 4 minutes including setup time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Solo and Duets will be judged separately.</li> <li>Classical and Folk dances are not a part of this competition. (Please refer to the rules of the classical dance competition, Nrityangana).</li> <li>Vulgarity and obscenity at any point in the choreography are strictly not allowed.</li> <li>Props (except hazardous and dangerous materials) are allowed. List of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>The music track for elimination and finals both should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li> <li>Points will be deducted for exceeding the time limit.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Pranjali Jadhav -</h5>"+ "<br/>" + "<h5>(Event Coordinator of So-Duet)</h5>" + "<br/>" + "<h5>Mob.- +91 8149101637</h5>";
            break;

        case "SW":
            EveName.innerHTML = "Swa(g)Desi";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/swagdesi.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: 5 - 15 members</li> <li>Registration Fee: 500/-</li> <li>Finals: 22nd - 24th December (specific date will be informed)</li> <li>Venue:COEP Technological University</li> <li>Styles permitted: All styles except Classical and Street dance forms</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<li>The competition will consist of a single round.</li> <li>Time Duration: 6 minutes, including setup time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>Props (except hazardous and dangerous materials) are allowed but will be based on the discretion of the organisers. A list of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>The music track should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li> <li>Participants may use more than one song in their performance.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Shirshak Tiple -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Swa(g)Desi)</h5>" + "<br/>" + "<h5>Mob.- +91 9373554188</h5>";
            break;

        case "NG":
            EveName.innerHTML = "Nrityangana";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/dance/nrityangana.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Registration Fee: 100/-</li> <li>Date: 22nd - 24th December (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<h4>Eliminations:</h4>" + "<ul> <li>The contestants will be given 120 seconds to perform in front of the judges.</li> <li>The selected participants will move to the next round.</li> </ul>" + "<h4>Finals:</h4>" + "<ul> <li>Participants shortlisted have to perform an extended version of their eliminations performance or a new one all together.</li> <li>Time Limit: 3-5 minutes including setup time</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>All types of classical dances are allowed, however different dance forms will not be judged separately.</li> <li>Folk and semi-classical dances are not permitted.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>Props (except hazardous and dangerous materials) are allowed. List of all the props should be given 7 days prior to the fest. Only the props mentioned in the list are allowed.</li> <li>The music track should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li></ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Ojal Padamwar -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Nrityangana)</h5>" + "<br/>" + "<h5>Mob.- +91 9324625102</h5>";
            break;

        case "LL":
            EveName.innerHTML = "Limelight";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/drama/limelight.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 100/-</li> <li>Language: English / Hindi / Marathi</li> <li>Date: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>The competition will consist of a single round.</li> <li>Participants will have to prepare an original monologue for this round.</li> <li>The time duration of the monologue should be 3 to 4 minutes.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open to college students of the age group 16 to 25.</li> <li>Participants must submit a digital written copy of their monologue 2 days prior to the competition.</li> <li>Unoriginal, plagiarised, or copied monologues will receive negative markings or will be disqualified depending on the discretion of the judges.</li> <li>Props (except hazardous and dangerous materials) are allowed.</li> <li>Miming or ventriloquism is not allowed.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, and racial, religious/ linguistic, sexual, and political views will lead to immediate disqualification.</li></ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Anuksha Koul -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Limelight)</h5>" + "<br/>" + "<h5>Mob.- +91 9833290170</h5>";
            break;

        case "AS":
            EveName.innerHTML = "Artiskit";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/drama/artiskit.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: 3 - 10 (including backstage)</li> <li>Entry Fees: INR 500/- per team</li> <li>Language: English / Hindi / Marathi</li> <li>Time Duration: 7 - 10 minutes, including setup time.</li> <li>Date: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>The competition will consist of a single round.</li> <li>At the reporting time, each team will be assigned two random topics, out of which participants choose one for their skit.</li> <li>Each team will be given 30 minutes of preparation time for the performance.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>A separate space will be allocated to each group to prepare for 30 minutes.</li> <li>Teams will be provided a stage, table, and two chairs for their performance.</li> <li>Teams are allowed to use objects they are carrying with themselves as props (on the discretion of the organisers) The use of such props is the sole responsibility of the participating team.</li> <li>Teams must present the synopsis of their skit along with the name of characters corresponding to the team members right after their performance.</li> <li>The use of virtual sources, communicating with other teams, and any other kind of malpractice will lead to immediate disqualification.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, and racial, religious/ linguistic, sexual, and political views will lead to immediate disqualification.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Shaunak Deshpande -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Artiskit)</h5>" + "<br/>" + "<h5>Mob.- +91 9175932409</h5>";
            break;

        case "SS":
            EveName.innerHTML = "Suno Suno";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/drama/suno-suno.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: 8 - 20 (Including all music accompanists)</li> <li>Entry Fees: INR 800/-</li> <li>Language: English / Hindi / Marathi</li> <li>Time Duration: 7 - 10 minutes, including setup time.</li> <li>Date: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>Teams can perform a social topic(s) of their choice.</li> <li>The competition will consist of a single round.</li> <li>Setup time: 2 min</li> <li>Performance time: 12 to 14 (If setup is done early, can be added to performance time)</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age 16-25.</li> <li>List of all team members should be provided to the event head during registration. Music accompanists are included in the team named stated above.</li> <li>Performance should be confined within the area (10-12 metres in diameter) i.e an open-air venue, with the audience on all sides.</li> <li>Costumes, props, instruments, and scripts are subject to verification.</li> <li>No electrical appliances shall be allowed during the performance whether inside or outside the circle of performance.</li> <li>Only live music is allowed. Teams will have to bring their own instruments. No instruments will be provided.</li> <li>Any kind of fluids, live animals, flame, heavy objects or any other material which has a possibility of damaging the area, or harming the people involved is strictly not allowed.</li> <li>Any prop/material used during the performance by the participants that litter the performance area is not permitted. In case of such circumstances, participants are expected to clean it.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, racial, religious/ linguistic, sexual, political views will lead to immediate disqualification.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Khushi Gupta -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Suno Suno)</h5>" + "<br/>" + "<h5>Mob.- +91 7977793064</h5>";
            break;

        case "DD":
            EveName.innerHTML = "Doodly Doo";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/doodly-do.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team size: Solo</li> <li>Entry fees: INR 100/-</li> <li>Time Duration: 1.5 hours</li> <li>Date: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>Themes will be disclosed at the time of the competition.</li> <li>Participants have to bring their own material- the necessary art supplies and a drawing board.</li> <li>Participants will be provided with a single A4 sheet.</li> <li>Participants have to complete their artwork in the above-mentioned time duration.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of the age 16-25.</li> <li>Black and white or colourful doodles are allowed.</li> <li>The artwork must be respectful and fit with the decorum of the event and fest.</li> <li>The use of virtual sources, cell phones, or any other kind of malpractice will lead to immediate disqualification.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Shirshak Tiple -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Doodly Doo)</h5>" + "<br/>" + "<h5>Mob.- +91 9373554188</h5>";
            break;

        case "CK":
            EveName.innerHTML = "Cirकला";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/cirkala.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry fees: INR 100/-</li> <li>Time Duration: 1.5 hours</li> <li>Date: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>Themes will be disclosed at the time of the competition.</li> <li>Participants have to bring their own material- the necessary art supplies and a drawing board.</li> <li>Participants will be provided with a single A3 sheet.</li> <li>Participants have to complete their artwork in the above-mentioned time duration.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of the age 16-25.</li> <li>Black and white, as well as coloured mandalas, are allowed.</li> <li>Coloured Mandalas can include watercolour backgrounds, and/or coloured outlines.</li> <li>Mandalas have to be in any of the following mediums: Pens, Pencils, Paints, Markers, and Pastels.</li> <li>The use of virtual sources, cell phones, or any other kind of malpractice will lead to immediate disqualification.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Siddhi Deore -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Cirकला)</h5>" + "<br/>" + "<h5>Mob.- +91 8600141968</h5>";
            break;

        case "GOS":
            EveName.innerHTML = "Game of Shades";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/game-of-shades.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry fees: INR 100/-</li> <li>Time Duration: 2 hours</li> <li>Date: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>Themes will be disclosed at the time of the competition.</li> <li>Participants have to bring their own material- the necessary art supplies and a drawing board.</li> <li>Participants will be provided with a single A3 sheet.</li> <li>Participants have to complete their artwork in the above-mentioned time duration.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of the age 16-25.</li> <li>All types of graphite pencils and charcoal sticks/pencils are allowed.</li> <li>Coloured sketching is not allowed.</li> <li>The use of virtual sources, cell phones, or any other kind of malpractice will lead to immediate disqualification.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Shirshak Tiple -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Game of Shades)</h5>" + "<br/>" + "<h5>Mob.- +91 9373554188</h5>";
            break;

        case "CS":
            EveName.innerHTML = "Color Splash";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/color-splash.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry fees: INR 100/-</li> <li>Time Duration: 2 hours</li> <li>Date: 22nd - 24th December 2022 (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>Themes will be disclosed at the time of the competition.</li> <li>Participants have to bring their own material- the necessary art supplies and a drawing board.</li> <li>Participants will be provided with a single A3 sheet.</li> <li>Participants have to complete their artwork in the above-mentioned time duration.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of the age 16-25.</li> <li>Any medium of colour is allowed: Water colours, Acrylic colours, Poster colours, and Oil colours.</li> <li>The use of virtual sources, cell phones, or any other kind of malpractice will lead to immediate disqualification.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Shaunak Deshpande -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Color Splash)</h5>" + "<br/>" + "<h5>Mob.- +91 9175932409</h5>";
            break;

        case "GP":
            EveName.innerHTML = "Graphix";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/anc/graphix.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry fees: INR 75/-</li> <li>Submission Deadline: IST 11:59 pm, 10th December 2022</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>The competition will be conducted and judged completely online.</li> <li>Participants will submit their artwork via the official Impressions website.</li> <li>No live presence will be required for this competition.</li> <li>The top 10 entries shortlisted by the judge will be displayed in an “Exhibition” on the college campus on the day of the main fest along with the name of the artist.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of the age 16-25.</li> <li>All entries must be in digital form and not hand-drawn.</li> <li>Themes will be mentioned at the time of registration.</li> <li>Any kind of licenced, official designing software is allowed. The name and version of the software must be mentioned during submission.</li> <li>The artwork must be of a standard aspect ratio (1:1, 1:2, 3:4, 9:16) with no more than 2048 pixels on the longer side.</li> <li>The artwork must be respectful and fit with the decorum of the event and fest, vulgarity and obscenity at any point are strictly not allowed.</li> <li>By submitting their artwork, the participants declare that their artwork is original and that they are the sole creators of the artwork.</li> <li>The sole copyright of the artwork remains with the creators, but Impressions has the right of promoting the content on social media platforms and other print media.</li> </ul>" + "<br/>" + "<br/>" + "<br/>" + "<h2>Image Submission Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Participants have to submit a .psd, .ai that they have used and a .jpeg file, with atleast three stages of their work. All files should be in a single folder.</li> <li>The folder should follow the naming convention as “Graphix_Name_Booking Id_ThemeNumber”</li> <li>The folder should be uploaded to your personal Google Drive. Access permission must be given to “Anyone with a link can view/edit”. For instructions on how to upload images to google drive, use this link:" + "<a href='https://support.google.com/photos/answer/6131416?hl=en&co=GENIE.Platform%3DDesktop&oco=1';>" + "How to upload" + "</a>" + "</li> <li>This link must be submitted through the Impressions website, by clicking on “Submit Now” on the respective event page.</li> <li>The website will redirect to a form that can be used for submission.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Shaunak Deshpande -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Graphix)</h5>" + "<br/>" + "<h5>Mob.- +91 9175932409</h5>";
            break;

        case "BO":
            EveName.innerHTML = "Box Office";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/camera/box-office.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: 10 (Maximum of 6 actors)</li> <li>Entry fees: INR 500/- per team.</li> <li>Time Limit: 15 minutes or under, including beginning and end credits.</li> <li>Submission Deadline: IST 11:59 pm, 10th December 2022</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will be conducted online, no live attendance will be required.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age 16-25.</li> <li>Actors and other crew members can be from a different college/school. Details of all the team members (with proof of age) must be entered at the time of registration. Participants must also submit a declaration stating no professional assistance was used in the making of the short film.</li> <li>Participants are allowed to make a short film in any genre. Music videos are not considered as short films and are not allowed.</li> <li>The film must have been filmed on or after 1st January 2022.</li> <li>The film can be in English, Marathi, or Hindi. However, English subtitles are required for submissions with languages other than English.</li> <li>The content of the film should be appropriate for public screening and should not promote any religious or political ideas. Vulgarity and obscenity at any point are strictly not allowed. Entries must be original and must not infringe on a third party\'s right.</li> <li>Plagiarised content will be disqualified. If soundtracks are used, due credit must be given to the makers.</li> <li>The sole copyright of the content remains with the creators, but Impressions has the right of promoting the content on social media platforms.</li> </ul>" + "<br/>" + "<br/>" + "<br/>" + "<h2>Video Submission Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The file format must be .mp4 and it must be named “Box Office_Name_BookingID”</li> <li>The film must be well-lit, clear, and without unnecessary background noise. The video should capture sound properly, and all sorts of audio disturbances must be avoided.</li> <li>The video must be recorded from a static camera (decent camera quality is expected). Landscape mode is preferred, and encouraged.</li> <li>Films are to be uploaded on YouTube/Google Drive and their respective links (with access open to all) are to be submitted in the form. For instructions on how to upload videos to Google Drive, use this link:" + "<a href='https://support.google.com/photos/answer/6131416?hl=en&co=GENIE.Platform%3DDesktop&oco=1';>" + "How to upload" + "</a>" + "</li> <li>This link must be submitted through the Impressions website, by clicking on “Submit Now” on the respective event page.</li> <li>The website will redirect to a form that can be used for submission.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Anuksha Koul -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Box Office)</h5>" + "<br/>" + "<h5>Mob.- +91 9833290170</h5>";
            break;

        case "LA":
            EveName.innerHTML = "Lens Art";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/camera/lens-art.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 75/-</li> <li>Deadline: IST 11:59 pm, 10th December 2022.</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will be conducted and judged completely online, no live presence will be required for this competition.</li> <li>Participants will submit their photographs via the official Impressions website.</li> <li>The top 10 entries shortlisted by the judge will be displayed in an “Exhibition” on the college campus on the day of the main fest along with the name of the artist.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age 16-25.</li> <li>Themes will be mentioned at the time of registration.</li> <li>Photography can be done using any device available (Mobile phone, DSLR or point-and-shoot).</li> <li>Usage of filters or editing software or plagiarism will result in disqualification</li> <li>The photo must be of a standard aspect ratio (1:1, 1:2, 3:4, 9:16) with no more than 2048 pixels on the longer side.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>By submitting their artwork, the participants declare that their artwork is original and that they are the sole creators of the artwork. A provision will be made on the submission link to sign a declaration ensuring the same.</li> <li>The sole copyright of the artwork remains with the creators, but Impressions has the right of promoting the content on social media platforms and other print media.</li> </ul>" + "<br/>" + "<br/>" + "<br/>" + "<h2>Image Submission Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Images should be submitted in JPEG/JPG/PNG format.</li> <li>Photos must be named “Lensart_ParticipantName_ThemeName”.</li> <li>Image size should not exceed 10MB.</li> <li>Photo editing and the use of filters are strictly prohibited.</li> <li>Photos submitted should be clearly visible for judging.</li> <li>The artwork provided should not have any glass frames.</li> <li>Submissions for multiple themes shall require multiple registrations.</li> <li>For instructions on how to upload images to google drive, use this link:" + "<a href='https://support.google.com/photos/answer/6131416?hl=en&co=GENIE.Platform%3DDesktop&oco=1';>" + "How to upload" + "</a>" + "</li> <li>This link must be submitted through the Impressions website, by clicking on “Submit Now” on the respective event page.</li> <li>The website will redirect to a form that can be used for submission.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Ajinkya Naik -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Lens Art)</h5>" + "<br/>" + "<h5>Mob.- +91 8433607531</h5>";
            break;

        case "BOJ":
            EveName.innerHTML = "Battle of DJ's";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/battle-of-djs.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 300/-</li> <li>Time is inclusive of Mixing, Looping and Miking</li> <li>Genre: House + Hip Hop + Bollywood or EDM. All types of genres together are preferred and will be marked accordingly.</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>There will be only one round.</li> <li>Time Limit: 8 - 10 minutes, Including setting up time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>All mixing needs to be done on the spot, Usage of pre-mixed songs or mash-ups will lead to disqualification.</li> <li>Only understandable language songs are allowed.</li> <li>Computer-operated software/hardware or any other equipment (Other than headphones, pen drives and CDs) is not allowed.</li> <li>No limit on the amount of tracks used (but time limit should strictly be followed)</li> <li>Participants are allowed to go live on Instagram but it is mandatory to tag Impressions.</li> <li>A mixer (with booth outs (monitor)) will be provided. If participants wish to bring any additional gears, they should bring it themselves and should inform the organisers in advance.</li> <li>Participants must carry a backup CD and Pen-drives.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Sharvari Phand -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Battle of DJ's)</h5>" + "<br/>" + "<h5>Mob.- +91 8767216174</h5>";
            break;

        case "SVN":
            EveName.innerHTML = "Saavani";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/saavani.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 100/-</li> <li>The competition is divided into three categories:" + "<ul> <li>Western Music (Language: English)</li> <li>Bollywood (Language: Hindi / Marathi)</li> <li>Indian Classical (Language: Open)</li>" + "</li> <li>Dates: 22nd - 24th December (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will consist of three rounds.</li> <li>Pre-Eliminations (offline):" + "<ul> <li>Time Limit: 100 seconds.</li> <li>Participants must prepare a relevant song in the chosen category.</li> <li>No backing tracks are allowed.</li> </ul>" + "<li>Semi-final (offline):" + "<ul> <li>Time limit: 2-3 minutes.</li> <li>Participants must prepare a relevant song in the chosen category.</li> <li>Participants can play one instrument OR have an accompanist OR use a karaoke track.</li> <li>Participants must bring the karaoke track on a pendrive in MP3 format.</li> </ul>" + "<li>Finals (offline):" + "<ul> <li>Time Limit: 3 to 4 minutes.</li> <li>Finalists must prepare a new song which they haven't sung in the earlier rounds.</li> <li>Participants can play one instrument OR have an accompanist OR use a karaoke track.</li> <li>The finalists may be asked to sing specific types of songs, scales etc by the judges in this round.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>The use of backing tracks for the submissions is allowed for all three rounds.</li> <li>Vulgarity and obscenity at any point are strictly not allowed.</li> <li>All karaoke tracks should be submitted to the Event Head two days prior to the event. Participants must bring the karaoke track on a pendrive in MP3 format.</li> <li>Each participant can sing in one category per registration and can register for multiple categories separately.</li> <li>Original compositions are allowed and encouraged.</li> <li>No rap music or remixing is allowed in this competition.</li> <li>Obscenity of any kind is not allowed and will lead to immediate disqualification.</li> <li>For the eliminations, participants can sing an extended version of their pre-elimination song or a new song. For the finals, participants have to sing a song which has not been submitted in the prior rounds.</li> <li>The time limit for all rounds should be strictly followed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Simran Veer -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Saavani)</h5>" + "<br/>" + "<h5>Mob.- +91 7262843661</h5>";
            break;

        case "ST":
            EveName.innerHTML = "Stay Tuned";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/stay-tuned.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo (+1 accompanist)</li> <li>Registration Fee: INR 100/-</li> <li>All instruments are allowed (String, Wind, Percussion , Electronic, Acoustic).</li> <li>The competition is divided into two categories: Percussion and Non-Percussion Instruments.</li> <li>Venue:COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<li>There will be only one round in the competition.</li> <li>Time Limit: 6 minutes including setup and clearance time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Each participant can use only one instrument per registration and can register for multiple categories separately. Participants have to carry their own instruments.</li> <li>Only the registered participant is eligible for the prize.</li> <li>Vocals are not allowed in this competition.</li> <li>Use of pre-recorded music will lead to disqualification.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Ajinkya Naik  -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Stay Tuned)</h5>" + "<br/>" + "<h5>Mob.- +91 8433607531</h5>";
            break;

        case "PN":
            EveName.innerHTML = "Poona-05";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/poona-05.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo (+1 beatboxer can accompany)</li> <li>Registration Fee: INR 100/-</li> <li>Venue:COEP Technological University</li> </ul>";
            EveStructure.innerHTML = EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Freestyle:" + "<ul> <li>All participants get the chance to perform in front of the judge.</li> <li>Time limit of the freestyle performance will be 3 minutes.</li> <li>A beatboxer can accompany the performer in the freestyle round.</li> </ul>" + "<li>Final:" + "<ul>  <li>The top 8 participants will have to face each other in a rap battle format.</li> <li>Every battle will be a knockout and the winners will qualify for the next battle.</li> <li>Time limit: 3 minutes per rap battle.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25.</li> <li>Beatboxers can accompany the performer in the freestyle round only.</li> <li>The scoring track should be submitted to the Event Head two days prior to the event. Also, the participants are requested to bring their tracks in a pen drive at the Impressions venue.</li> <li>The participant is allowed to use puns, double entendre, and quips, but any sort of sexist or offensive slurs will lead to immediate disqualification.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, racial, religious/ linguistic, sexual, political views will lead to immediate disqualification.</li> <li>Performance should be confined within the area (10-12 meters in diameter) i.e an open-air venue, with the audience on all sides.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Amaan Jamadar  -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Poona-05)</h5>" + "<br/>" + "<h5>Mob.- +91 9967164734</h5>";
            break;

        case "HC":
            EveName.innerHTML = "High Current";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/music/high-current.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: 4 to 10 people</li> <li>Entry Fees: INR 600/-</li> <li>Venue:COEP Technological University</li> </ul>";
            EveStructure.innerHTML = EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will consist of one single round.</li> <li>Bands can perform any song of their choice, cover or an original composition.</li> <li>Time limit: 10 to 12 minutes</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul> <li>This competition is open for college students of age group 16-25 only. The Band should not be a professional band and should not have a professional performer as a member of the band.</li> <li>A right-handed 5-piece drum kit, microphones, amplifiers (one guitar amplifier and one bass amplifier) and line-in jacks will be provided, common to all bands for the duration of their performances.</li> <li>In case the band drummer is left-handed, the team must inform the organisers at the time of registration itself.</li> <li>Participants can bring their own drum piece (cymbals).</li> <li>Vocals with lyrics are mandatory.</li> <li>At least 3 instruments should be used (different guitars will count as different instruments).</li> <li>Use of pre-recorded music such as guitar loops and keyboard samples will result in disqualification.</li> <li>The chosen songs and their lyrics, the name of the song and the instruments are subject to verification. In case they fail to adhere to the rules, participants will be disqualified.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, and racial, religious/ linguistic, sexual and political views will lead to immediate disqualification.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Kaustubh Virkar   -</h5>"+ "<br/>" + "<h5>(Event Coordinator of High Current)</h5>" + "<br/>" + "<h5>Mob.- +91 8652121785</h5>";
            break;

        case "AEB":
            EveName.innerHTML = "Andaaz-E-Bayaan";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/andaaz-e-bayaan.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 100/-</li> <li>Language: Hindi / Urdu / Marathi</li> <li>Dates: 22nd - 24th December (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will consist of two rounds.</li> <li>Eliminations (Offline):" + "<ul> <li>Participants will be performing a 1-2 mins long shayari.</li> <li>Top few participants will be shortlisted for the finals.</li> </ul>" + "<li>Finals (offline):" + "<ul> <li>Shortlisted participants will be notified before the final event.</li> <li>Each participant must prepare an original Shayari to be performed live on stage.</li> <li>Time Limit: 2 to 4 minutes including clearance time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>Shayari must be original and written by the participant. The participants must sign a declaration stating the same.</li> <li>Shayaris can be recited from memory or read from a paper.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, and racial, religious/ linguistic, sexual, and political views will lead to immediate disqualification.</li> <li>Props (except hazardous and dangerous materials) are allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Amaan Jamadar   -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Andaaz-E-Bayaan)</h5>" + "<br/>" + "<h5>Mob.- +91 9967164734</h5>";
            break;

        case "TT":
            EveName.innerHTML = "Tale Teller";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/tale-teller.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 100/-</li> <li>Language: English / Hindi</li> <li>Dates: 22nd - 24th December (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will consist of a single round.</li> <li>Each participant must present a story on stage.</li> <li>Time Limit: 3 to 5 minutes including clearance time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>Reading from notes is not allowed. The story must be told, not read.</li> <li>The name of the author must be mentioned.</li> <li>Participation in this competition implies a declaration from the participant that the story performed is original and adheres to the rules of the competition.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, racial, religious/ linguistic, sexual, political views will lead to immediate disqualification.</li> <li>Ventriloquism is allowed. Props (except hazardous and dangerous materials) are allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Ishwari Thatte   -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Tale Teller)</h5>" + "<br/>" + "<h5>Mob.- +91 8625058398</h5>";
            break;

        case "KK":
            EveName.innerHTML = "ComiKing";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/comiking.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 100/-</li> <li>Language: English / Hindi / Marathi</li> <li>Finals: 22nd - 24th December (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will consist of a single round.</li> <li>Each participant must perform a live original comedy set on stage.</li> <li>Time Limit: 2 to 6 minutes including clearance time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>Reading from a script is strictly prohibited.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, racial, religious/ linguistic, sexual, and political views will lead to immediate disqualification.</li> <li>Props (except hazardous and dangerous materials) are allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Sharvari Phand   -</h5>"+ "<br/>" + "<h5>(Event Coordinator of ComiKing)</h5>" + "<br/>" + "<h5>Mob.- +91 8767216174</h5>";
            break;

        case "VA":
            EveName.innerHTML = "Vers-A-Tile";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/versatile.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 100/-</li> <li>Language: English / Hindi / Marathi</li> <li>Dates: 22nd - 24th December (specific date will be informed)</li> <li>Venue: COEP Technological University</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>The competition will consist of two rounds.</li> <li>Eliminations (Offline):" + "<ul> <li>Participants will be performing a 1 to 2 minute long poem.</li> <li>Top few participants will be shortlisted for the finals.</li> </ul>" + "<li>Finals (offline):" + "<ul> <li>Shortlisted participants will be notified before the final event.</li> <li>Each participant must prepare an original poem to be performed live on stage.</li> <li>Time Limit: 2 to 4 minutes including clearance time.</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>All styles of poetry are allowed, but poems must be original, written by the participant. The participants must sign a declaration stating the same.</li> <li>Poetry can be recited from memory or read from a paper.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, racial, religious/ linguistic, sexual, and political views will lead to immediate disqualification.</li> <li>Props (except hazardous and dangerous materials) are allowed.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Ishwari Thatte   -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Vers-A-Tile)</h5>" + "<br/>" + "<h5>Mob.- +91 8625058398</h5>";
            break;

        case "AD":
            EveName.innerHTML = "Anecdote";
            for (let i = 0; i < EveImg.length; i++) {
                EveImg[i].style.backgroundImage = "url('images/shoutout/anecdote.png')";
            }
            EveDetails.innerHTML = "<h2>Details:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Team Size: Solo</li> <li>Entry Fees: INR 80/-</li> <li>Language: English / Hindi / Marathi</li> <li>Submission deadline: 4th December 2022</li> </ul>";
            EveStructure.innerHTML = "<h2>Structure:</h2>" + "<br/>" + "<br/>" + "<ul> <li>Word Limit: 120 words</li> </ul>";
            EveRules.innerHTML = "<h2>Rules:</h2>" + "<br/>" + "<br/>" + "<ul>  <li>This competition is open for college students of age group 16-25.</li> <li>Themes will be mentioned at the time of registration and are open to the interpretation of the writer.</li> <li>The accepted literary pieces are: any experience/ belief/ facts/ short story relating to the theme.</li> <li>Submissions must be in a pdf format through the Impressions website, by clicking on “Submit Now” on the respective event page.</li> <li>All content must be original; any plagiarism will lead to disqualification.</li> <li>By submitting their write-ups, the participants declare that their artwork is original and that they are the sole writers of it.</li> <li>One registration is only for one theme. For participating in more than one theme, multiple registrations need to be made.</li> <li>Usage of abusive language, obscenity, direct implications, plagiarism, racial, religious/ linguistic, sexual and political views will lead to immediate disqualification.</li> </ul>";
            EveContact.innerHTML = "<h3>Have a query?</h3>"+ "<br/>" + "<h3>Contact Us:</h3>" + "<br/>" + "<br/>" + "<h5>Ojal Padamwar -</h5>"+ "<br/>" + "<h5>(Event Coordinator of Anecdote)</h5>" + "<br/>" + "<h5>Mob.- +91 9324625102</h5>";
            break;

        default:
            EveName.innerHTML = "Register Now...";
            EveDetails.innerHTML = " ";
            EveStructure.innerHTML = " ";
            EveRules.innerHTML = " "
            break;
    }
}