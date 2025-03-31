        const dashboardBtn = document.getElementById("dashboardBtn");
        const homeBtn = document.getElementById("homeBtn");
        const patientIndexBtn = document.getElementById("patientIndexBtn");
        const registrationBtn = document.getElementById("registrationBtn");
        const medicalBtn = document.getElementById("medicalBtn");
        const healthBtn = document.getElementById("healthBtn");
        const vitalBtn = document.getElementById("vitalBtn");
        const labBtn = document.getElementById("labBtn");
        const marBtn = document.getElementById("marBtn");
        const cdssBtn = document.getElementById("cdssBtn");
        const followUpBtn = document.getElementById("followUpBtn");
        const consentFormBtn = document.getElementById("consentFormBtn");
        const billingsBtn = document.getElementById("billingsBtn");
        const content = document.getElementById("content");
        const navbarButtons = document.getElementById("navbarButtons");

        function setActiveButtons(...buttons) {

            const allButtons = [

                dashboardBtn, registrationBtn, homeBtn, patientIndexBtn,

                medicalBtn, healthBtn, vitalBtn, labBtn,

                marBtn, cdssBtn, followUpBtn, consentFormBtn, billingsBtn

            ];

            

            // Reset all buttons to inactive state

            allButtons.forEach(btn => {

                // Reset styles for all buttons

                btn.classList.remove("bg-white", "text-blue-900", "text-blue-700");

                btn.classList.add("bg-blue-900", "text-white");

            });


            // Activate the selected buttons

            buttons.forEach((btn) => {

                if (btn === homeBtn || btn === patientIndexBtn) {

                    // Set Home and Patient Index buttons to active styles

                    btn.classList.add("bg-white", "text-blue-700");

                    btn.classList.remove("text-gray-700");

                } else {

                    // Set other buttons to active styles

                    btn.classList.add("bg-white", "text-blue-900");

                    btn.classList.remove("text-white");

                }

            });


            // Ensure Home and Patient Index buttons have a white background when inactive

            if (!buttons.includes(homeBtn)) {

                homeBtn.classList.add("bg-white");

                homeBtn.classList.remove("bg-blue-900", "text-white");

            }

            if (!buttons.includes(patientIndexBtn)) {

                patientIndexBtn.classList.add("bg-white");

                patientIndexBtn.classList.remove("bg-blue-900", "text-white");

            }

        }

        function showHome() {
            content.innerHTML = `
                <h2 class="text-5xl md:text-7xl font-bold text-black relative z-10">
                    Welcome to Everrest Hospital!
                </h2>
                <img src="2.png" class="absolute inset-0 w-full h-full object-cover opacity-50" alt="Hospital Background">
            `;
            setActiveButtons(dashboardBtn, homeBtn);
            navbarButtons.style.display = 'flex'; // Show navbar buttons
            document.querySelector("main").classList.remove("overflow-auto"); // Disable scrolling
            document.querySelector("span.text-gray-600").style.display = "inline"; // Show Gmail
            document.querySelector("header").classList.remove("justify-end"); // Reset layout
        }
        
        function showPatientIndex() {
            content.innerHTML = `
                <div class="absolute top-4 left-4 flex items-center space-x-2">
                    <div class="relative">
                        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                        </svg>
                        <input type="text" id="searchInput" placeholder="Search..."
                            class="p-3 pl-10 border border-blue-900 rounded-full w-64 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>
        
                <div class="w-full p-2 mt-2 relative">
                    <table class="w-full border-collapse">
                        <thead>
                            <tr class="bg-gray-100 border-b border-blue-900">
                                <th class="p-3 text-center">Registration No.</th>
                                <th class="p-3 text-center">Name</th>
                                <th class="p-3 text-center">Date of Birth</th>
                                <th class="p-3 text-center">Admission Date</th>
                            </tr>
                        </thead>
                        <tbody id="patientTable">
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00001</td>
                                <td class="p-3 text-center">Abra, Allah Shane</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                            </tr>
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00002</td>
                                <td class="p-3 text-center">Amitlio, Ivan Matthew</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                            </tr>
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00003</td>
                                <td class="p-3 text-center">Amedo, Mariea Alexa</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                            </tr>
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00004</td>
                                <td class="p-3 text-center">Andres, Marko Antonio</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                            </tr>
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00005</td>
                                <td class="p-3 text-center">Andres, Myles Erztelano</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                            </tr>
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00006</td>
                                <td class="p-3 text-center">Araño, Precious Gem</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                            </tr>
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00007</td>
                                <td class="p-3 text-center">Ardilla, Niña Beatriz</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                                <td class="p-3 text-center">MM-DD-YYYY</td>
                            </tr>
                            <tr class="border-b border-blue-900 hover:font-bold hover:text-blue-700 hover:underline cursor-pointer">
                                <td class="p-3 text-center">FEUM-00008</td>
                                <td class="p-3 text-center">Granger, Hermione Jean</td>
                                <td class="p-3 text-center">18-02-2004</td>
                                <td class="p-3 text-center">03-16-2025</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        
            // Add search functionality
            const searchInput = document.getElementById("searchInput");
            searchInput.addEventListener("input", function () {
                const searchValue = searchInput.value.toLowerCase();
                const rows = document.querySelectorAll("#patientTable tr");
        
                rows.forEach(row => {
                    const regNoCell = row.cells[0]; // Registration Number cell
                    const nameCell = row.cells[1]; // Name cell
                    if (regNoCell && nameCell) {
                        const regNo = regNoCell.textContent.toLowerCase();
                        const name = nameCell.textContent.toLowerCase();
                        if (regNo.includes(searchValue) || name.includes(searchValue)) {
                            row.style.display = ""; // Show row
                        } else {
                            row.style.display = "none"; // Hide row
                        }
                    }
                });
            });
        
            setActiveButtons(patientIndexBtn, dashboardBtn);
        }
        
                
        function showRegistration() {
    content.innerHTML = `
        <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
            <!-- Patient Information (Top Section) -->
            <div class="mb-6">
                <h3 class="text-5xl font-semibold text-blue-900 mb-4">Patient Information</h3>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Patient's Name</label>
                        <input type="text" id="patientName" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Date of Birth</label>
                        <input type="date" id="dob" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Age</label>
                        <input type="number" id="age" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Sex</label>
                        <input type="text" id="sex" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Civil Status</label>
                        <input type="text" id="civilStatus" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Religion</label>
                        <input type="text" id="religion" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Current Address</label>
                        <input type="text" id="currentAddress" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Place of Birth</label>
                        <input type="text" id="placeOfBirth" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Contact No. (Mobile)</label>
                        <input type="text" id="contactNo" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Emergency Contact</label>
                        <input type="text" id="emergencyContact" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                    <div>
                        <label class="block text-blue-900 text-sm font-medium">Relationship to Patient</label>
                        <input type="text" id="relationshipToPatient" class="border border-blue-700 p-2 rounded w-full">
                    </div>
                </div>
            </div>

            <!-- Hospital Details & Medical Information (Two Columns Under Patient Info) -->
            <div class="grid grid-cols-2 gap-4 mt-4">
                <!-- Hospital Details -->
                <div class="bg-gray-100 p-4 rounded-lg">
                    <h3 class="text-5xl font-semibold text-blue-900 mb-4">Hospital Details</h3>
                    <div class="grid grid-cols-1 gap-4">
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Registration Number</label>
                            <input type="text" id="registrationNumber" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Admission Date (if admitted)</label>
                            <input type="date" id="admissionDate" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Room Number (if admitted)</label>
                            <input type="text" id="roomNumber" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Bed Number (if admitted)</label>
                            <input type="text" id="bedNumber" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Admission Time (if admitted)</label>
                            <input type="time" id="admissionTime" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Attending Physician</label>
                            <input type="text" id="attendingPhysician" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                    </div>
                </div>

                <!-- Medical Information -->
                <div class="bg-gray-100 p-4 rounded-lg">
                    <h3 class="text-5xl font-semibold text-blue-900 mb-4">Medical Information</h3>
                    <div class="grid grid-cols-1 gap-4">
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Chief Complaint</label>
                            <input type="text" id="chiefComplaint" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Admitting Diagnosis</label>
                            <input type="text" id="admittingDiagnosis" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Other Diagnoses</label>
                            <input type="text" id="otherDiagnoses" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                        <div>
                            <label class="block text-blue-900 text-sm font-medium">Allergies (Food, Medication, others...)</label>
                            <input type="text" id="allergies" class="border border-blue-700 p-2 rounded w-full">
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-end mt-4">
                <button id="updateButton" class="bg-blue-500 text-white p-2 rounded">Update</button>
            </div>

            <div class="h-20"></div> <!-- Added space at the bottom -->
        </div>
    `;

    // Set up the Update button functionality
    document.getElementById("updateButton").addEventListener("click", function() {
        // Logic to handle the update action
        const updatedData = {
            name: document.getElementById("patientName").value,
            dob: document.getElementById("dob").value,
            age: document.getElementById("age").value,
            sex: document.getElementById("sex").value,
            civilStatus: document.getElementById("civilStatus").value,
            religion: document.getElementById("religion").value,
            currentAddress: document.getElementById("currentAddress").value,
            placeOfBirth: document.getElementById("placeOfBirth").value,
            contactNo: document.getElementById("contactNo").value,
            emergencyContact: document.getElementById("emergencyContact").value,
            relationshipToPatient: document.getElementById("relationshipToPatient").value,
            registrationNumber: document.getElementById("registrationNumber").value,
            admissionDate: document.getElementById("admissionDate").value,
            roomNumber: document.getElementById("roomNumber").value,
            bedNumber: document.getElementById("bedNumber").value,
            admissionTime: document.getElementById("admissionTime").value,
            attendingPhysician: document.getElementById("attendingPhysician").value,
            chiefComplaint: document.getElementById("chiefComplaint").value,
            admittingDiagnosis: document.getElementById("admittingDiagnosis").value,
            otherDiagnoses: document.getElementById("otherDiagnoses").value,
            allergies: document.getElementById("allergies").value,
        };

        // Here you can add the logic to send the updatedData to your server or handle it as needed
        console.log("Updated Data:", updatedData);
        alert("Patient information updated successfully!");
    });

    setActiveButtons(registrationBtn);
}
        // Add additional functions for new buttons
        function showMedicalHistory() {
            content.innerHTML = `
                            <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
                                <!-- History of Present Illness -->
                                <div class="mb-6">
                                    <h3 class="text-2xl font-bold text-blue-900 mb-4">History of Present Illness</h3>
                                    <div class="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="Onset" class="border border-blue-700 p-2 rounded-md w-full">
                                        <input type="text" placeholder="Aggravating Factors" class="border border-blue-700 p-2 rounded-md w-full">
                                        <input type="text" placeholder="Location" class="border border-blue-700 p-2 rounded-md w-full">
                                        <input type="text" placeholder="Relieving Factors" class="border border-blue-700 p-2 rounded-md w-full">
                                        <input type="text" placeholder="Duration" class="border border-blue-700 p-2 rounded-md w-full">
                                    </div>
                                </div>

                                <!-- Past Health History -->
                                <div class="mb-6">
                                    <h3 class="text-2xl font-bold text-blue-900 mb-4">Past Health History</h3>
                                    <div class="grid grid-cols-2 gap-6">
                                        <!-- Hospitalizations -->
                                        <div>
                                            <label class="block text-blue-900 font-semibold mb-2">Hospitalizations</label>
                                            <div class="grid grid-cols-2 gap-2">
                                                ${generateInputFields(5, "Hospitalization Details")}
                                            </div>
                                        </div>

                                        <!-- Surgeries -->
                                        <div>
                                            <label class="block text-blue-900 font-semibold mb-2">Surgeries</label>
                                            <div class="grid grid-cols-2 gap-2">
                                                ${generateInputFields(5, "Surgery Details")}
                                            </div>
                                        </div>

                                        <!-- Accidents -->
                                        <div>
                                            <label class="block text-blue-900 font-semibold mb-2">Accidents</label>
                                            <div class="grid grid-cols-2 gap-2">
                                                ${generateInputFields(5, "Accident Details")}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Immunization & Existing Conditions -->
                                <div class="mb-6">
                                    <div class="grid grid-cols-2 gap-6">
                                        <!-- Immunization -->
                                        <div>
                                            <h3 class="text-2xl font-bold text-blue-900 mb-4">Immunization</h3>
                                            <div class="grid grid-cols-2 gap-2 items-center">
                                                <label class="text-blue-900">Flu</label>
                                                <input type="date" class="border border-blue-900 p-2 rounded-md w-full">
                                                <label class="text-blue-900">DTaP</label>
                                                <input type="date" class="border border-blue-900 p-2 rounded-md w-full">
                                                <label class="text-blue-900">Pneumonia</label>
                                                <input type="date" class="border border-blue-900 p-2 rounded-md w-full">
                                                <label class="text-blue-900">Hepa A</label>
                                                <input type="date" class="border border-blue-900 p-2 rounded-md w-full">
                                                <label class="text-blue-900">Hepa B</label>
                                                <input type="date" class="border border-blue-900 p-2 rounded-md w-full">
                                            </div>
                                            <div class="mt-4">
                                                <label class="text-blue-900 italic">Others (please specify)</label>
                                                ${generateVaccineFields(5)}
                                            </div>
                                        </div>

                                        <!-- Existing Conditions -->
                                        <div>
                                            <h3 class="text-2xl font-bold text-blue-900 mb-4">Existing Conditions</h3>
                                            <div class="grid grid-cols-2 gap-4 text-blue-900">
                                                <label><input type="checkbox" class="mr-2"> High blood pressure</label>
                                                <label><input type="checkbox" class="mr-2"> Heart disease</label>
                                                <label><input type="checkbox" class="mr-2"> Stroke</label>
                                                <label><input type="checkbox" class="mr-2"> Diabetes</label>
                                                <label><input type="checkbox" class="mr-2"> Anemia</label>
                                                <label><input type="checkbox" class="mr-2"> Chronic Obstructive Pulmonary Disease</label>
                                                <label><input type="checkbox" class="mr-2"> Thyroid Disorder</label>
                                                <label><input type="checkbox" class="mr-2"> Depression or Anxiety</label>
                                                <label><input type="checkbox" class="mr-2"> Cancer</label>
                                                <label><input type="checkbox" class="mr-2"> Autoimmune Disease</label>
                                            </div>
                                            <div class="mt-4">
                                                <label class="text-blue-900 italic">Others (please specify)</label>
                                                <div class="grid grid-cols-2 gap-4">
                                                    ${generateCheckboxFields(5)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- Lifestyle -->
                                <div class="mb-6">
                                    <h3 class="text-2xl font-bold text-blue-900 mb-4">Lifestyle</h3>
                                    <div class="grid grid-cols-2 gap-6">
                                        <!-- Nutrition -->
                                        <div>
                                            <h4 class="text-xl font-semibold text-blue-900">Nutrition</h4>
                                            <div class="flex items-center justify-between">
                                                <span>Diet:</span>
                                                <input type="text" class="border border-blue-900 p-2 rounded-md w-3/4">
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Fluids:</span>
                                                <input type="text" class="border border-blue-900 p-2 rounded-md w-3/4">
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Recent Weight Change:</span>
                                                <input type="checkbox">
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Supplements:</span>
                                                <input type="checkbox">
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Conditions affecting eating:</span>
                                                <input type="checkbox">
                                            </div>
                                        </div>
                                        <div>
                                            <h5 class="text-lg font-semibold text-blue-900">Comments:</h5>
                                            <textarea class="border border-blue-900 p-2 rounded-md w-full h-24"></textarea>
                                        </div>

                                        <!-- Elimination -->
                                        <div>
                                            <h4 class="text-xl font-semibold text-blue-900">Elimination</h4>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Bladder Incontinence:</span>
                                                <input type="checkbox">
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Bowel Incontinence:</span>
                                                <input type="checkbox">
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Bowel Sounds Present:</span>
                                                <input type="checkbox">
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Constipation:</span>
                                                <input type="checkbox">
                                            </div>
                                        </div>
                                        <div>
                                            <h5 class="text-lg font-semibold text-blue-900">Comments:</h5>
                                            <textarea class="border border-blue-900 p-2 rounded-md w-full h-24"></textarea>
                                        </div>

                                        <!-- Sensory -->
                                        <div>
                                            <h4 class="text-xl font-semibold text-blue-900">Sensory</h4>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Vision:</span>
                                                <div>
                                                    <input type="checkbox"> Normal
                                                    <input type="checkbox"> Impaired
                                                    <input type="checkbox"> Corrective Device
                                                </div>
                                            </div>
                                            <div class="flex items-center justify-between mt-2">
                                                <span>Hearing:</span>
                                                <div>
                                                    <input type="checkbox"> Normal
                                                    <input type="checkbox"> Impaired
                                                    <input type="checkbox"> Corrective Device
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 class="text-lg font-semibold text-blue-900">Comments:</h5>
                                            <textarea class="border border-blue-900 p-2 rounded-md w-full h-24"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <!-- Allergies and Current Medications -->
                                <div class="grid grid-cols-2 gap-6 mb-6">
                                    <!-- Allergies -->
                                    <div>
                                        <h3 class="text-2xl font-bold text-blue-900 mb-4">Allergies</h3>
                                        <div class="grid grid-cols-3 gap-2">
                                            <label><input type="checkbox"> Food</label>
                                            <input type="text" placeholder="Kind or Type" class="border border-blue-900 p-2 rounded-md w-full">
                                            <input type="text" placeholder="Reactions" class="border border-blue-900 p-2 rounded-md w-full">
                                            
                                            <label><input type="checkbox"> Medicine</label>
                                            <input type="text" placeholder="Kind or Type" class="border border-blue-900 p-2 rounded-md w-full">
                                            <input type="text" placeholder="Reactions" class="border border-blue-900 p-2 rounded-md w-full">
                                            
                                            <label><input type="checkbox"> Latex</label>
                                            <input type="text" placeholder="Kind or Type" class="border border-blue-900 p-2 rounded-md w-full">
                                            <input type="text" placeholder="Reactions" class="border border-blue-900 p-2 rounded-md w-full">
                                            
                                            <label><input type="checkbox"> Environment</label>
                                            <input type="text" placeholder="Kind or Type" class="border border-blue-900 p-2 rounded-md w-full">
                                            <input type="text" placeholder="Reactions" class="border border-blue-900 p-2 rounded-md w-full">
                                        </div>
                                    </div>
                                    
                                    <!-- Current Medications -->
                                    <div>
                                        <h3 class="text-2xl font-bold text-blue-900 mb-4">Current Medications</h3>
                                        <div class="grid grid-cols-1 gap-2">
                                            <input type="text" class="border border-blue-900 p-2 rounded-md w-full" placeholder="Medication Name">
                                            <input type="text" class="border border-blue-900 p-2 rounded-md w-full" placeholder="Medication Name">
                                            <input type="text" class="border border-blue-900 p-2 rounded-md w-full" placeholder="Medication Name">
                                            <input type="text" class="border border-blue-900 p-2 rounded-md w-full" placeholder="Medication Name">
                                            <input type="text" class="border border-blue-900 p-2 rounded-md w-full" placeholder="Medication Name">
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Family Medical History -->
                                <div class="mb-6">
                                    <h3 class="text-2xl font-bold text-blue-900 mb-4">Family Medical History</h3>
                                    <table class="w-full border border-blue-900">
                                        <thead>
                                            <tr class=" text-blue-900">
                                                <th class="border border-blue-900 p-2">Relation</th>
                                                <th class="border border-blue-900 p-2">Age if Living</th>
                                                <th class="border border-blue-900 p-2">Age at Death</th>
                                                <th class="border border-blue-900 p-2">Present Condition</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border border-blue-900 p-2 text-blue-900">Father</td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                            </tr>
                                            <tr>
                                                <td class="border border-blue-900 p-2 text-blue-900">Mother</td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                            </tr>
                                            <tr>
                                                <td class="border border-blue-900 p-2 text-blue-900">Siblings</td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                            </tr>
                                            <tr>
                                                <td class="border border-blue-900 p-2 text-blue-900"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                            </tr>
                                            <tr>
                                               <td class="border border-blue-900 p-2 text-blue-900"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                            </tr>
                                            <tr>
                                                <td class="border border-blue-900 p-2 text-blue-900"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                                <td class="border border-blue-900 p-2"><input type="text" class="w-full border p-2 rounded-md"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div class="h-20"></div> <!-- Added space at the bottom -->
                            </div>
                        `;        
                    setActiveButtons(medicalBtn);
        }

        // Helper function to generate multiple input fields dynamically
        function generateInputFields(count, placeholderText) {
            let fields = "";
            for (let i = 0; i < count; i++) {
                fields += `
                    <input type="text" class="border border-blue-700 p-2 rounded w-full" placeholder="${placeholderText}">
                    <input type="date" class="border border-blue-700 p-2 rounded w-full">
                `;
            }
            return fields;
        }

        // Helper function to generate additional vaccine fields
        function generateVaccineFields(count) {
            let fields = "";
            for (let i = 0; i < count; i++) {
                fields += `
                    <div class="flex space-x-2 p-1">
                        <input type="text" class="border border-blue-700 p-2 rounded w-full" placeholder="Additional Vaccine">
                        <input type="date" class="border border-blue-700 p-2 rounded">
                    </div>
                `;
            }
            return fields;
        }
        // Helper function to generate additional checkbox fields
        function generateCheckboxFields(count) {
            let fields = "";
            for (let i = 0; i < count; i++) {
                fields += `
                    <label class="flex items-center space-x-2">
                        <input type="checkbox" class="mr-2">
                        <input type="text" class="border border-blue-700 p-2 rounded w-full" placeholder="Specify Condition">
                    </label>
                `;
            }
            return fields;
        }
        function showHealthAssessment() {
            const newLocal = `
                                    <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
                                        <!-- Weight, Height, BMI -->
                                        <div class="grid grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <label class="block text-sm font-semibold text-blue-900">Weight (kg):</label>
                                                <input type="number" id="weightInput" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter weight">
                                            </div>
                                            <div>
                                                <label class="block text-sm font-semibold text-blue-900">Height (cm):</label>
                                                <input type="number" id="heightInput" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter height">
                                            </div>
                                            <div>
                                                <label class="block text-sm font-semibold text-blue-900">BMI:</label>
                                                <input type="text" id="bmiInput" class="border border-blue-900 p-1 w-full rounded-md" placeholder="BMI" readonly>
                                            </div>
                                        </div>

                                        <!-- Conducted by, Date, Time -->
                                        <div class="p-2 mb-4">
                                            <label class="block text-sm font-semibold text-blue-900">Assessment Conducted by:</label>
                                            <input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter name">
                                            <div class="grid grid-cols-2 gap-4 mt-2">
                                                <div>
                                                    <label class="block text-sm font-semibold text-blue-900">Date:</label>
                                                    <input type="date" class="border border-blue-900 p-1 w-full rounded-md">
                                                </div>
                                                <div>
                                                    <label class="block text-sm font-semibold text-blue-900">Time(24H Format):</label>
                                                    <input type="time" class="border border-blue-900 p-1 w-full rounded-md">
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-2 gap-4">
                                            <!-- Orientation -->
                                            <div class="p-2">
                                                <h3 class="font-bold text-sm mb-2 text-blue-900">Orientation</h3>
                                                <div class="grid grid-cols-3 gap-1 text-xs text-blue-900">
                                                    <label><input type="checkbox"> Alert</label>
                                                    <label><input type="checkbox"> Drowsy</label>
                                                    <label><input type="checkbox"> Lethargic</label>
                                                    <label><input type="checkbox"> Stuporous</label>
                                                    <label><input type="checkbox"> Coma</label>
                                                </div>
                                                <table class="w-full mt-2 text-center text-xs text-blue-900">
                                                    <tr><td class="p-1">Person</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Place</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Time</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Situation</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                </table>
                                            </div>

                                            <!-- Vital Signs -->
                                            <div class="p-2">
                                                <h3 class="font-bold text-sm mb-2 text-blue-900">Vital Signs</h3>
                                                <table class="w-full text-center text-xs text-blue-900">
                                                    <tr><td class="p-1">Temp</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">BP</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">RR</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">PR</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">O2</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-2 gap-4 mt-4">
                                            <!-- Head -->
                                            <div class="p-2">
                                                <h3 class="font-bold text-sm mb-2 text-blue-900">Head</h3>
                                                <table class="w-full text-center text-xs text-blue-900">
                                                    <tr><td class="p-1">Hair</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Eyes</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Nose</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Ears</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Mouth</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Lesions</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Dentitions</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                </table>
                                            </div>

                                            <!-- Neck -->
                                            <div class="p-2">
                                                <h3 class="font-bold text-sm mb-2 text-blue-900">Neck</h3>
                                                <table class="w-full text-center text-xs text-blue-900">
                                                    <tr><td class="p-1">Carotid Pulse</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">JVD</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Trachea</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Lymph Nodes</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Thyroid Glands</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Cervical Vertebrae</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-2 gap-4 mt-4">
                                            <!-- Chest -->
                                            <div class=" p-2">
                                                <h3 class="font-bold text-sm mb-2 text-blue-900">Chest</h3>
                                                <table class="w-full text-center text-xs text-blue-900">
                                                    <tr><td class="p-1">Apical Pulse</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Muffled</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Arrhythmia</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Breath Sounds</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Chest Symmetry</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                </table>
                                            </div>

                                            <!-- Abdomen -->
                                            <div class="p-2">
                                                <h3 class="font-bold text-sm mb-2 text-blue-900">Abdomen</h3>
                                                <label class="block text-sm text-blue-900">Inspection:</label>
                                                <textarea class="border border-blue-900 p-1 w-full rounded-md"></textarea>
                                                <h4 class="font-bold text-sm mt-2 text-blue-900">Auscultation</h4>
                                                <div class="grid grid-cols-4 gap-2 text-xs text-blue-900">
                                                    <label>LUQ <input type="checkbox"> Active <input type="checkbox"> Hyper <input type="checkbox"></label>
                                                    <label>RUQ <input type="checkbox"> Active <input type="checkbox"> Hyper <input type="checkbox"></label>
                                                    <label>LLQ <input type="checkbox"> Active <input type="checkbox"> Hyper <input type="checkbox"></label>
                                                    <label>RLQ <input type="checkbox"> Active <input type="checkbox"> Hyper <input type="checkbox"></label>
                                                </div>
                                                <label class="block text-sm text-blue-900 mt-2">Palpation:</label>
                                                <textarea class="border border-blue-900 p-1 w-full rounded-md"></textarea>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-2 gap-4 mt-4">
                                            <!-- Upper Extremities -->
                                            <div class="p-2">
                                                <h3 class="font-bold text-sm mb-2 text-blue-900">Upper Extremities</h3>
                                                <table class="w-full text-center text-xs text-blue-900">
                                                    <tr><td class="p-1">Radial Pulse</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Temperature</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Capillary Refills</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                    <tr><td class="p-1">Nails</td><td><input type="text" class="border border-blue-900 p-1 w-full rounded-md" placeholder="Enter details"></td></tr>
                                                </table>
                                            </div>
                                        </div>

                                        <div class="h-20"></div> <!-- Added space at the bottom -->
                                    </div>
                                `;        content.innerHTML = newLocal;

                    // Add event listeners to calculate BMI
                    const weightInput = document.getElementById("weightInput");
                    const heightInput = document.getElementById("heightInput");
                    const bmiInput = document.getElementById("bmiInput");

                    function calculateBMI() {
                        const weight = parseFloat(weightInput.value);
                        const height = parseFloat(heightInput.value) / 100; // Convert cm to meters
                        if (!isNaN(weight) && !isNaN(height) && height > 0) {
                            const bmi = (weight / (height * height)).toFixed(2);
                            bmiInput.value = bmi;
                        } else {
                            bmiInput.value = "";
                        }
                    }

                    weightInput.addEventListener("input", calculateBMI);
                    heightInput.addEventListener("input", calculateBMI);
                    setActiveButtons(healthBtn);
                }

        function showVitalSigns() {
            content.innerHTML = `
                                        <div class="p-6 bg-gray rounded-lg relative -mt-6 h-[80vh]">

                                            <!-- Date & Time -->
                                            <div class="grid grid-cols-2 gap-6 mb-6">
                                                <div>
                                                    <label for="date" class="block text-blue-900 font-semibold">Date of Assessment</label>
                                                    <input type="date" id="date" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300">
                                                </div>
                                                <div>
                                                    <label for="time" class="block text-blue-900 font-semibold">Time of Assessment (24H Format)</label>
                                                    <input type="time" id="time" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300">
                                                </div>
                                            </div>

                                            <!-- Vital Signs Inputs -->
                                            <div class="grid grid-cols-3 gap-6">
                                                <div>
                                                    <label for="bloodPressure" class="block text-blue-900 font-semibold">Blood Pressure</label>
                                                    <input type="text" id="bloodPressure" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300" placeholder="120/80">
                                                </div>
                                                <div>
                                                    <label for="temperature" class="block text-blue-900 font-semibold">Temperature</label>
                                                    <input type="number" id="temperature" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300" placeholder="37.0">
                                                </div>
                                                <div>
                                                    <label for="pulseRate" class="block text-blue-900 font-semibold">Pulse Rate</label>
                                                    <input type="number" id="pulseRate" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300" placeholder="73">
                                                </div>
                                                <div>
                                                    <label for="respiratoryRate" class="block text-blue-900 font-semibold">Respiratory Rate</label>
                                                    <input type="number" id="respiratoryRate" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300" placeholder="20">
                                                </div>
                                                <div>
                                                    <label for="oxygenSaturation" class="block text-blue-900 font-semibold">Oxygen Saturation</label>
                                                    <input type="number" id="oxygenSaturation" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300" placeholder="97">
                                                </div>
                                                <div>
                                                    <label for="painScale" class="block text-blue-900 font-semibold">Pain Scale</label>
                                                    <input type="text" id="painScale" class="w-full p-2 border border-blue-700 rounded focus:ring focus:ring-blue-300" placeholder="9/10">
                                                </div>
                                            </div>
                                        </div>
                                    `;        setActiveButtons(vitalBtn);

            // Temperature validation
            const temperatureInput = document.getElementById("temperature");

            temperatureInput.addEventListener("input", function () {
                const tempValue = parseFloat(temperatureInput.value);

                if (!isNaN(tempValue) && tempValue > 37.5) {
                    temperatureInput.classList.add("border-red-500"); // Apply red border
                    temperatureInput.classList.remove("border-gray-300"); // Remove default border
                } else {
                    temperatureInput.classList.remove("border-red-500"); // Remove red border
                    temperatureInput.classList.add("border-gray-300"); // Restore default border
                }
            });
        }


            function showLabResults() {
                content.innerHTML = `
                                                    <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
                                                        <div class="bg-gray-100 p-4 rounded-lg">
                                                            <div class="overflow-x-auto">
                                                                <div class="bg-gray-100 rounded-lg p-4 mb-4">
                                                                    <label for="assessment-date" class="block text-lg font-semibold text-blue-900">Date of Assessment</label>
                                                                    <input id="assessment-date" type="date" class="border border-blue-700 p-2 rounded">
                                                                </div>
                                                                <table class="min-w-full border border-blue-700 mt-2">
                                                                    <thead>
                                                                        <tr>
                                                                            <th class="px-4 py-2 text-left text-2xl">Complete Blood Count</th>
                                                                            <th class="px-4 py-2 text-left text-gray-800">Results</th>
                                                                            <th class="px-4 py-2 text-left text-gray-800">Reference Range</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody class="text-blue-700">
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">White Blood Cell (WBC)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter WBC count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">6,000–17,000 mm³</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Red Blood Cell (RBC)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter RBC count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">3.90–5.30 million/mm³</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Hemoglobin (HGB)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter HGB level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">11.3–14.1 g/dL</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Hematocrit (HCT)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter HCT level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">31% – 41%</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Mean Corpuscular Volume (MCV)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter MCV level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">70–86 fL</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Mean Corpuscular Hemoglobin (MCH)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter MCH level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">23–31 pg</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Mean Corpuscular Hemoglobin Concentration (MCHC)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter MCHC level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">32–36 g/dL RBC</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Platelet Count</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter platelet count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">150,000–400,000 platelets/mm³</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Neutrophils</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter neutrophil count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">1000–8500 mm³</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Lymphocytes</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter lymphocyte count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">3000–9500 mm³</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Monocytes</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter monocyte count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">300–850 mm³</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Eosinophils</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter eosinophil count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">165–465 mm³</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Basophils</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter basophil count"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">0–140 mm³</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table> <br>
                                                                <div class="bg-gray-100 rounded-lg p-4 mb-4">
                                                                    <label for="assessment-date" class="block text-lg font-semibold text-blue-900">Date of Assessment</label>
                                                                    <input id="assessment-date" type="date" class="border border-blue-700 p-2 rounded">
                                                                </div>
                                                                <!-- Urinalysis Table -->
                                                                <table class="min-w-full border border-blue-700 mt-2">
                                                                    <thead>
                                                                        <tr>
                                                                            <th class="px-4 py-2 text-left text-2xl">Urinalysis</th>
                                                                            <th class="px-4 py-2 text-left text-gray-800">Results</th>
                                                                            <th class="px-4 py-2 text-left text-gray-800">Reference Range</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody class="text-blue-700">
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Specific Gravity</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Specific Gravity"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">1.001-1.020</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">pH</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter pH level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">5 to 7</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Protein</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Protein level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">Less than 10 mg/dL</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Glucose</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Glucose level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">Negative</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Ketones</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Ketones level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">Negative</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Bilirubin</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Bilirubin level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">Negative</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Blood</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Blood level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">Negative</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Leukocytes (White Blood Cells)</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Leukocytes level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">Negative</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td class="border border-blue-700 px-4 py-2">Nitrates</td>
                                                                            <td class="border border-blue-700 px-4 py-2"><input type="text" class="border p-1 w-full rounded" placeholder="Enter Nitrates level"></td>
                                                                            <td class="border border-blue-700 px-4 py-2">Negative</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                        <div class="h-20"></div> <!-- Added space at the bottom -->
                                                    </div>
                                                `;        
                setActiveButtons(labBtn);
            }
           
                    function showMAR() {
                        content.innerHTML = `
                             <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">

                                <!-- Administration Date -->
                                <div>
                                    <label class="block text-blue-900 text-sm font-medium">Administration Date</label>
                                    <input type="date" class="border border-blue-700 p-2 rounded mb-4">
                                </div>

                                <!-- Attending Physician -->
                                <div>
                                    <label class="block text-blue-900 text-sm font-medium">Attending Physician</label>
                                    <input type="text" class="border border-blue-700 p-2 rounded w-[50vh] mb-4">
                                </div>

                                <!-- First Set of Tables -->
                                <div class="grid grid-cols-2 gap-4">
                                    ${generateTableSection("Medication Table", true, 4)}
                                    ${generateTableSection("Time Table", false, 4)}
                                </div>

                                <!-- Second Attending Physician -->
                                <div class="mt-6">
                                    <label class="block text-blue-900 text-sm font-medium">Attending Physician</label>
                                    <input type="text" class="border border-blue-700 p-2 rounded w-[50vh] mb-4">
                                </div>

                                <!-- Second Set of Tables -->
                                <div class="grid grid-cols-2 gap-4">
                                    ${generateTableSection("Medication Table", true, 4)}
                                    ${generateTableSection("Time Table", false, 4)}
                                </div>

                                <div class="h-20"></div> <!-- Extra spacing at the bottom -->
                            </div>
                        `;

                        setActiveButtons(marBtn);
                    }

                    // Updated generateTableSection function to accept row count
                    function generateTableSection(title, isMedicationTable, rowCount) {
                        return `
                            <div>
                                <label class="block text-blue-900 text-sm font-medium">${title}</label>
                                <div class="overflow-x-auto mt-2">
                                    <table class="w-full border-collapse border border-blue-700">
                                        <thead>
                                            <tr class="bg-gray-100 border-b border-blue-700">
                                                ${isMedicationTable ? `
                                                    <th class="p-2 text-center border border-blue-700">Medication</th>
                                                    <th class="p-2 text-center border border-blue-700">Dosage</th>
                                                    <th class="p-2 text-center border border-blue-700">Route</th>
                                                    <th class="p-2 text-center border border-blue-700">Frequency</th>
                                                ` : `
                                                    <th class="p-2 text-center border border-blue-700">Time</th>
                                                    <th class="p-2 text-center border border-blue-700">Administered by</th>
                                                `}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${isMedicationTable ? generateMedicationRows(rowCount) : generateTimeRows(rowCount)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `;
                    }        
                    
                    // Function to generate rows for the Medication Table
                    function generateMedicationRows(num) {
                        let rows = '';
                        for (let i = 0; i < num; i++) {
                            rows += `
                                <tr class="border-b border-blue-700">
                                    <td class="p-3 text-center border border-blue-700"><input type="text" class="border border-blue-700 p-2 rounded w-full"></td>
                                    <td class="p-3 text-center border border-blue-700"><input type="text" class="border border-blue-700 p-2 rounded w-full"></td>
                                    <td class="p-3 text-center border border-blue-700"><input type="text" class="border border-blue-700 p-2 rounded w-full"></td>
                                    <td class="p-3 text-center border border-blue-700"><input type="text" class="border border-blue-700 p-2 rounded w-full"></td>
                                </tr>
                            `;
                        }
                        return rows;
                    }
                    
                    // Function to generate rows for the Time Table
                    function generateTimeRows(num) {
                        let rows = '';
                        for (let i = 0; i < num; i++) {
                            rows += `
                                <tr class="border-b border-blue-700">
                                    <td class="p-3 text-center border border-blue-700">
                                        <div class="grid grid-cols-1 gap-2">
                                            <input type="time" class="border border-blue-700 p-2 rounded w-full">
                                        </div>
                                    </td>
                                    <td class="p-3 text-center border border-blue-700">
                                        <div class="grid grid-cols-1 gap-2">
                                            <input type="text" class="border border-blue-700 p-2 rounded w-full">
                                        </div>
                                    </td>
                                </tr>
                            `;
                        }
                        return rows;
                    }        
                    function showCDSS() {
                        content.innerHTML = `
                        <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
                            <h2 class="text-5xl font-semibold text-black mb-6">Clinical Decision Support System</h2>

                            <!-- Patient Information -->
                            <div class="grid grid-cols-3 gap-4 mb-6">
                                <div class="flex items-center">
                                    <label class="block text-blue-900 text-sm font-bold w-1/3">Patient Name</label>
                                    <input id="patientName" type="text" class="border border-blue-700 p-2 rounded w-2/3">
                                </div>
                                <div class="flex items-center">
                                    <label class="block text-blue-900 text-sm font-bold w-1/3">Age</label>
                                    <input id="patientAge" type="number" class="border border-blue-700 p-2 rounded w-2/3">
                                </div>
                                <div class="flex items-center">
                                    <label class="block text-blue-900 text-sm font-bold w-1/3">Diagnosis</label>
                                    <input id="patientDiagnosis" type="text" class="border border-blue-700 p-2 rounded w-2/3">
                                </div>
                            </div>

                            <!-- Treatment Table -->
                            <div class="overflow-x-auto">
                                <table class="w-full border-collapse border border-blue-700">
                                    <thead>
                                        <tr class="bg-gray-100 border-b border-blue-700">
                                            <th class="p-3 text-center border border-blue-700 text-sm font-bold">Symptoms</th>
                                            <th class="p-3 text-center border border-blue-700 text-sm font-bold">Medication</th>
                                            <th class="p-3 text-center border border-blue-700 text-sm font-bold">Possible Risks</th>
                                            <th class="p-3 text-center border border-blue-700 text-sm font-bold">Treatment Suggestions</th>
                                            <th class="p-3 text-center border border-blue-700 text-sm font-bold">Complete Treatment Plan</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-blue-700">
                                            <td class="p-3 text-center border border-blue-700"><textarea id="symptoms" class="border border-blue-700 p-2 rounded w-full"></textarea></td>
                                            <td class="p-3 text-center border border-blue-700"><textarea id="medication" class="border border-blue-700 p-2 rounded w-full"></textarea></td>
                                            <td class="p-3 text-center border border-blue-700"><textarea id="risks" class="border border-blue-700 p-2 rounded w-full"></textarea></td>
                                            <td class="p-3 text-center border border-blue-700"><textarea id="suggestions" class="border border-blue-700 p-2 rounded w-full"></textarea></td>
                                            <td class="p-3 text-center border border-blue-700"><textarea id="treatmentPlan" class="border border-blue-700 p-2 rounded w-full"></textarea></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <!-- Buttons -->
                            <div class="flex gap-4 mt-6">
                                <button id="treatmentRulesBtn" class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white font-bold">Treatment Rules</button>
                                <button id="decisionRulesBtn" class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white font-bold">Decision Rules</button>
                            </div>

                            <!-- Reset Button -->
                            <div class="mt-4">
                                <button id="resetButton" class="border border-blue-700 text-blue-900 px-4 py-2 rounded hover:bg-white hover:text-blue-900 font-bold">RESET</button>
                            </div>
                        </div>

                        <!-- Modal -->
                        <div id="modal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
                            <div class="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl h-5/6 overflow-y-auto" style="background-image: url('2.png'); background-size: cover;">
                                <div class="absolute top-2 right-2 cursor-pointer" id="closeModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <h3 id="modalTitle" class="text-2xl font-bold mb-4 text-black">Modal Title</h3>
                                <p id="modalContent" class="text-black mb-6">Modal Content</p>
                            </div>
                        </div>
                        `;

                        // Add event listener for the reset button
                        setTimeout(() => {
                            const resetButton = document.getElementById("resetButton");
                            resetButton.addEventListener("click", () => {
                                document.getElementById("patientName").value = "";
                                document.getElementById("patientAge").value = "";
                                document.getElementById("patientDiagnosis").value = "";
                                document.getElementById("symptoms").value = "";
                                document.getElementById("medication").value = "";
                                document.getElementById("risks").value = "";
                                document.getElementById("suggestions").value = "";
                                document.getElementById("treatmentPlan").value = "";
                            });

                            // Modal functionality
                            const modal = document.getElementById("modal");
                            const modalTitle = document.getElementById("modalTitle");
                            const modalContent = document.getElementById("modalContent");
                            const closeModal = document.getElementById("closeModal");

                            document.getElementById("treatmentRulesBtn").addEventListener("click", () => {
                                modalTitle.textContent = "Treatment Rules";
                                modalContent.textContent = "This function is not implemented yet.";
                                modal.classList.remove("hidden");
                            });

                            document.getElementById("decisionRulesBtn").addEventListener("click", () => {
                                modalTitle.textContent = "Decision Rules";
                                modalContent.textContent = "This function is not implemented yet.";
                                modal.classList.remove("hidden");
                            });

                            closeModal.addEventListener("click", () => {
                                modal.classList.add("hidden");
                            });

                            // Close modal when clicking outside
                            window.addEventListener("click", (event) => {
                                if (event.target === modal) {
                                    modal.classList.add("hidden");
                                }
                            });
                        }, 0);

                        setActiveButtons(cdssBtn);
                    }

                    function showFollowUp() {
                        content.innerHTML = `
                            <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
                                <h2 class="text-4xl font-semibold text-blue-900 mb-6">Book an Appointment</h2>
                    
                                <!-- Appointment Booking Form -->
                                <div class="grid grid-cols-3 gap-4 mb-6">
                                    <div>
                                        <label class="block text-blue-900 text-sm font-medium">Patient's name (Last name, First name)</label>
                                        <input type="text" id="patientName" class="border border-blue-700 p-2 rounded w-full" placeholder="Enter patient name">
                                    </div>
                                    <div>
                                        <label class="block text-blue-900 text-sm font-medium">Choose date</label>
                                        <select id="appointmentDate" class="border border-blue-700 p-2 rounded w-full">
                                            <option value="2024-07-13">2024-07-13</option>
                                            <option value="2024-12-13">2024-12-13</option>
                                            <option value="2025-03-16">2025-03-16</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-blue-900 text-sm font-medium">Choose time</label>
                                        <select id="appointmentTime" class="border border-blue-700 p-2 rounded w-full">
                                            <option value="16:00">16:00</option>
                                            <option value="11:00">11:00</option>
                                            <option value="17:00">17:00</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block text-blue-900 text-sm font-medium">Choose type</label>
                                        <select id="appointmentType" class="border border-blue-700 p-2 rounded w-full">
                                            <option value="Follow-up">Follow-up</option>
                                            <option value="Check up">Check up</option>
                                            <option value="No Show">No Show</option>
                                        </select>
                                    </div>
                                </div>
                    
                                <div>
                                    <button id="bookAppointmentBtn" class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white font-bold">
                                        Book Appointment
                                    </button>
                                </div> <br>
                    
                                <!-- All Appointments Table -->
                                <h2 class="text-2xl font-semibold text-blue-900 mb-3">All Appointments</h2>
                                <div class="overflow-x-auto">
                                    <table class="w-full border-collapse">
                                        <thead>
                                            <tr class="bg-gray-100 border-b border-blue-700">
                                                <th class="p-3 text-center border-b border-blue-700">Patient ID</th>
                                                <th class="p-3 text-center border-b border-blue-700">Patient</th>
                                                <th class="p-3 text-center border-b border-blue-700">App. ID</th>
                                                <th class="p-3 text-center border-b border-blue-700">Type</th>
                                                <th class="p-3 text-center border-b border-blue-700">Date</th>
                                                <th class="p-3 text-center border-b border-blue-700">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody id="appointmentsTable">
                                            <!-- Preloaded Appointments -->
                                            <tr class="border-b border-blue-700">
                                                <td class="p-3">FEUM-00008</td>
                                                <td class="p-3">Granger, Hermione Jean</td>
                                                <td class="p-3">APID000254</td>
                                                <td class="p-3">Check up</td>
                                                <td class="p-3">2024-07-13</td>
                                                <td class="p-3">16:00</td>
                                            </tr>
                                            <tr class="border-b border-blue-700">
                                                <td class="p-3">FEUM-00008</td>
                                                <td class="p-3">Granger, Hermione Jean</td>
                                                <td class="p-3">APID000259</td>
                                                <td class="p-3">No Show</td>
                                                <td class="p-3">2024-12-13</td>
                                                <td class="p-3">11:00</td>
                                            </tr>
                                            <tr class="border-b border-blue-700">
                                                <td class="p-3">FEUM-00008</td>
                                                <td class="p-3">Granger, Hermione Jean</td>
                                                <td class="p-3">APID000262</td>
                                                <td class="p-3">Check up</td>
                                                <td class="p-3">2025-03-16</td>
                                                <td class="p-3">17:00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="h-80"></div>
                            </div>
                        `;
                    
                        setActiveButtons(followUpBtn);
                    
                        const bookAppointmentBtn = document.getElementById("bookAppointmentBtn");
                        const appointmentsTable = document.getElementById("appointmentsTable");
                        const bellDropdown = document.getElementById("notificationDropdown");
                    
                        bookAppointmentBtn.addEventListener("click", () => {
                            const patientName = document.getElementById("patientName").value.trim();
                            const date = document.getElementById("appointmentDate").value;
                            const time = document.getElementById("appointmentTime").value;
                            const type = document.getElementById("appointmentType").value;
                    
                            if (!patientName) {
                                showErrorPopup("Please enter the patient's name.");
                                return;
                            }
                    
                            // Generate random Patient ID & Appointment ID
                            const patientID = `FEUM-${Math.floor(Math.random() * 100000).toString().padStart(5, "0")}`;
                            const appointmentID = `APID${Math.floor(Math.random() * 1000000).toString().padStart(6, "0")}`;
                    
                            // Add the new appointment to the table
                            const newRow = `
                                <tr class="border-b border-blue-700">
                                    <td class="p-3">${patientID}</td>
                                    <td class="p-3">${patientName}</td>
                                    <td class="p-3">${appointmentID}</td>
                                    <td class="p-3">${type}</td>
                                    <td class="p-3">${date}</td>
                                    <td class="p-3">${time}</td>
                                </tr>
                            `;
                            appointmentsTable.innerHTML += newRow;
                    
                            // Add notification
                            const notificationItem = document.createElement("div");
                            notificationItem.className = "p-2 border-b border-gray-300 text-blue-900 flex justify-between items-center";
                    
                            // Remove "No new notifications" if exists
                            const noNotifications = document.getElementById("noNotifications");
                            if (noNotifications) {
                                noNotifications.remove();
                            }
                    
                            // Notification text
                            const notificationText = document.createElement("span");
                            notificationText.textContent = `New appointment booked by ${patientName}: ${type} on ${date} at ${time}`;
                            notificationItem.appendChild(notificationText);
                    
                            // Close icon
                            const closeIcon = document.createElement("span");
                            closeIcon.className = "cursor-pointer text-red-500 ml-2";
                            closeIcon.innerHTML = "&times;";
                            closeIcon.addEventListener("click", (event) => {
                                event.stopPropagation();
                                notificationItem.remove();
                                updateNotificationCount(-1);
                            });
                            notificationItem.appendChild(closeIcon);
                    
                            bellDropdown.appendChild(notificationItem);
                            updateNotificationCount(1);
                        });
                    
                        // Function to show error popup
                        function showErrorPopup(message) {
                            const errorPopup = document.createElement("div");
                            errorPopup.className = "fixed top-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg z-50";
                            errorPopup.innerText = message;
                    
                            document.body.appendChild(errorPopup);
                    
                            // Automatically remove the popup after 3 seconds
                            setTimeout(() => {
                                errorPopup.remove();
                            }, 3000);
                        }
                    
                        // Function to update notification count
                        function updateNotificationCount(change) {
                            const bellIcon = document.getElementById("notificationBell");
                            let count = parseInt(bellIcon.getAttribute("data-count")) || 0;
                            count += change;
                    
                            if (count > 0) {
                                bellIcon.setAttribute("data-count", count);
                                bellIcon.classList.add("relative");
                                if (!bellIcon.querySelector(".notification-badge")) {
                                    const badge = document.createElement("span");
                                    badge.className = "notification-badge absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1";
                                    badge.textContent = count;
                                    bellIcon.appendChild(badge);
                                } else {
                                    bellIcon.querySelector(".notification-badge").textContent = count;
                                }
                            } else {
                                bellIcon.removeAttribute("data-count");
                                const badge = bellIcon.querySelector(".notification-badge");
                                if (badge) badge.remove();
                            }
                        }
                    }
                    
                    function showConsentForm() {    
                        content.innerHTML = `
                             <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
                                <div class="flex-grow">
                                    <h2 class="text-3xl font-semibold text-blue-900 mb-6">Medical Consent Form</h2>
                    
                                    <!-- Patient Information Section -->
                                    <div class="mb-6">
                                        <h3 class="text-lg font-semibold text-blue-900 mb-2">Patient Information</h3>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div>
                                                <label class="block text-blue-900 text-sm font-medium">First name:</label>
                                                <input type="text" id="patientFirstName" class="border border-blue-700 p-2 rounded w-full">
                                            </div>
                                            <div>
                                                <label class="block text-blue-900 text-sm font-medium">Last name:</label>
                                                <input type="text" id="patientLastName" class="border border-blue-700 p-2 rounded w-full">
                                            </div>
                                            <div>
                                                <label class="block text-blue-900 text-sm font-medium">Date of birth:</label>
                                                <input type="date" id="patientBirthday" class="border border-blue-700 p-2 rounded w-full">
                                            </div>
                                            <div>
                                                <label class="block text-blue-900 text-sm font-medium">Patient identifier (if known):</label>
                                                <input type="text" id="patientIdentifier" class="border border-blue-700 p-2 rounded w-full">
                                            </div>
                                            <div class="col-span-2">
                                                <label class="block text-blue-900 text-sm font-medium">Gender:</label>
                                                <div class="border border-blue-700 rounded p-2 mt-1">
                                                    <div class="flex items-center space-x-4">
                                                        <label><input type="radio" name="gender" value="male" class="mr-2"> Male</label>
                                                        <label><input type="radio" name="gender" value="female" class="mr-2"> Female</label>
                                                        <label><input type="radio" name="gender" value="non-binary" class="mr-2"> Non-binary</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    
                                    <!-- Referring Physician Section -->
                                    <div class="mb-6">
                                        <h3 class="text-lg font-semibold text-blue-900 mb-2">Referring Physician</h3>
                                        <div>
                                            <label class="block text-blue-900 text-sm font-medium">Your doctor:</label>
                                            <input type="text" id="referringDoctor" class="border border-blue-700 p-2 rounded w-full" placeholder="Referring doctor's name">
                                        </div>
                                        <div class="mt-2">
                                            <label class="block text-blue-900 text-sm font-medium">Has recommended the following treatment(s)/procedure(s):</label>
                                            <textarea id="treatmentRecommended" class="border border-blue-700 p-2 rounded w-full" rows="2"></textarea>
                                        </div>
                                    </div>
                    
                                    <!-- Condition Description Section -->
                                    <div class="mb-6">
                                        <label class="block text-blue-900 text-sm font-medium">I understand the following condition(s) as indicated in my case:</label>
                                        <textarea id="conditionDescription" class="border border-blue-700 p-2 rounded w-full" rows="4"></textarea>
                                    </div>
                    
                                    <!-- Risks/Complications Section -->
                                    <div class="mb-6">
                                        <label class="block text-blue-900 text-sm font-medium">The following risks/complications have been discussed with me by:</label>
                                        <input type="text" id="risksDiscussedBy" class="border border-blue-700 p-2 rounded w-full" placeholder="Referring doctor's name">
                                    </div>
                    
                                    <!-- Clinician Information Section -->
                                    <div class="grid grid-cols-2 gap-4 mb-6">
                                        <div>
                                            <label class="block text-blue-900 text-sm font-medium">Clinician name:</label>
                                            <input type="text" id="clinicianName" class="border border-blue-700 p-2 rounded w-full">
                                        </div>
                                        <div>
                                            <label class="block text-blue-900 text-sm font-medium">Clinician signature:</label>
                                            <input type="text" id="clinicianSignature" class="border border-blue-700 p-2 rounded w-full">
                                        </div>
                                        <div>
                                            <label class="block text-blue-900 text-sm font-medium">Clinical designation:</label>
                                            <input type="text" id="clinicalDesignation" class="border border-blue-700 p-2 rounded w-full">
                                        </div>
                                        <!-- Submit Button -->
                                <div class="flex justify-center mb-8 mt-6">
                                    <button id="submitConsentForm" class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 font-bold">
                                        Submit
                                    </button>
                                </div>
                                <div class="h-20"></div>
                                    </div>
                                </div>
                    
                                
                                 
                            </div>
                        `;
                    
                        
                        
                        

                    
                        const submitConsentForm = document.getElementById("submitConsentForm");
                        const bellDropdown = document.getElementById("notificationDropdown");
                    
                        submitConsentForm.addEventListener("click", () => {
                            // Get the first name and last name from the input fields
                            const firstName = document.getElementById("patientFirstName").value;
                            const lastName = document.getElementById("patientLastName").value;
                    
                            // Create a notification with the user's name
                            const notificationItem = document.createElement("div");
                            notificationItem.className = "p-2 border-b border-gray-300 text-blue-900 flex justify-between items-center";
                    
                            // Remove "No new notifications" if it exists
                            const noNotifications = document.getElementById("noNotifications");
                            if (noNotifications) {
                                noNotifications.remove();
                            }
                    
                            // Notification text
                            const notificationText = document.createElement("span");
                            notificationText.textContent = `New consent form submitted by ${firstName} ${lastName}.`;
                            notificationItem.appendChild(notificationText);
                    
                            // Close icon
                            const closeIcon = document.createElement("span");
                            closeIcon.className = "cursor-pointer text-red-500 ml-2";
                            closeIcon.innerHTML = "&times;";
                            closeIcon.addEventListener("click", (event) => {
                                event.stopPropagation(); // Prevent dropdown from closing
                                notificationItem.remove();
                                updateNotificationCount(-1); // Decrease notification count
                            });
                            notificationItem.appendChild(closeIcon);
                    
                            bellDropdown.appendChild(notificationItem);
                    
                            // Update the notification count on the bell icon
                            updateNotificationCount(1);
                        });
                    
                        // Function to update the notification count
                        function updateNotificationCount(change) {
                            const bellIcon = document.getElementById("notificationBell");
                            let count = parseInt(bellIcon.getAttribute("data-count")) || 0;
                            count += change;
                    
                            if (count > 0) {
                                bellIcon.setAttribute("data-count", count);
                                bellIcon.classList.add("relative");
                                if (!bellIcon.querySelector(".notification-badge")) {
                                    const badge = document.createElement("span");
                                    badge.className = "notification-badge absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1";
                                    badge.textContent = count;
                                    bellIcon.appendChild(badge);
                                } else {
                                    bellIcon.querySelector(".notification-badge").textContent = count;
                                }
                            } else {
                                bellIcon.removeAttribute("data-count");
                                const badge = bellIcon.querySelector(".notification-badge");
                                if (badge) badge.remove();
                            }
                        }
                    
                        setActiveButtons(consentFormBtn);
                    }
                    
                           
                              function showBillings() {
            content.innerHTML = `
                                        <div class="p-4 bg-gray rounded-lg shadow-md h-[100vh] w-full overflow-y-auto">
                                            <!-- Insurance Section -->
                                            <div class="mb-6">
                                                <div class="flex justify-between items-center mb-4">
                                                    <h3 class="text-2xl font-semibold text-blue-900">Insurance</h3>
                                                    <div class="relative w-1/2">
                                                        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                                                        </svg>
                                                        <input type="text" id="insuranceSearchInput" placeholder="Search..." 
                                                            class="p-3 pl-10 border border-blue-900 rounded-full w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                    </div>
                                                </div>
                                                
                                                <!-- Blue Line -->
                                                <div class="h-1 bg-blue-900 mb-4"></div>
                                                <!-- insurance table -->
                                               <div class="w-full p-2 mt-2 relative overflow-x-auto">
    <table class="w-full border-collapse">
        <thead>
            <tr class="bg-gray-100 border-b border-blue-900">
                <th class="p-3 text-center">PRIORITY</th>
                <th class="p-3 text-center">PLAN NAME</th>
                <th class="p-3 text-center">PLAN NO.</th>
                <th class="p-3 text-center">EFFECTIVE DATE</th>
                <th class="p-3 text-center">EXPIRATION DATE</th>
                <th class="p-3 text-center">ACTIVE</th>
            </tr>
        </thead>
        <tbody id="insuranceTable">
            <tr class="border-b border-blue-900">
                <td class="p-3 text-center">SECONDARY</td>
                <td class="p-3 text-center">HOIPY</td>
                <td class="p-3 text-center">987654</td>
                <td class="p-3 text-center">10-04-2024</td>
                <td class="p-3 text-center">10-04-2025</td>
                <td class="p-3 text-center">YES</td>
            </tr>
            <tr class="border-b border-blue-900">
                <td class="p-3 text-center">PRIMARY</td>
                <td class="p-3 text-center">MEDICARE</td>
                <td class="p-3 text-center">321098</td>
                <td class="p-3 text-center">10-31-2020</td>
                <td class="p-3 text-center">10-31-2040</td>
                <td class="p-3 text-center">YES</td>
            </tr>
        </tbody>
    </table>
</div>

            </div>

                                            <div class="h-80"></div> <!-- Added space at the bottom -->

<!-- Insurance Details Form -->
<div class="grid grid-cols-2 gap-4 mb-6">
    <div class="flex flex-col">
        <label>INSURANCE PRIORITY</label>
        <select class="border p-2 rounded">
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="tertiary">Tertiary</option>
        </select>
    </div>
    <div class="flex flex-col">
        <label>POLICY HOLDER</label>
        <select class="border p-2 rounded">
            <option value="self">Self</option>
            <option value="spouse">Spouse</option>
            <option value="parent">Parent</option>
            <option value="other">Other</option>
        </select>
    </div>
    <div class="flex flex-col">
        <label>PLAN TYPE</label>
        <select class="border p-2 rounded">
            <option value="hmo">HMO</option>
            <option value="ppo">PPO</option>
            <option value="pos">POS</option>
        </select>
    </div>
    <div class="flex flex-col">
        <label>PLAN NAME</label>
        <select class="border p-2 rounded">
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
        </select>
    </div>
    <div class="flex flex-col">
        <label>TYPE OF COVERAGE</label>
        <select class="border p-2 rounded">
            <option value="medical">Medical</option>
            <option value="dental">Dental</option>
            <option value="vision">Vision</option>
        </select>
    </div>
    <div class="flex flex-col">
        <label>GROUP NAME</label>
        <select class="border p-2 rounded">
            <option value="group_a">Group A</option>
            <option value="group_b">Group B</option>
            <option value="group_c">Group C</option>
        </select>
    </div>
    <div class="flex flex-col">
        <label>EFFECTIVE DATE</label>
        <input type="date" class="border p-2 rounded">
    </div>
    <div class="flex flex-col">
        <label>EXPIRATION DATE</label>
        <input type="date" class="border p-2 rounded">
    </div>
    <div class="flex flex-col">
        <label>INSURANCE COMPANY</label>
        <select class="border p-2 rounded">
            <option value="company_a">Company A</option>
            <option value="company_b">Company B</option>
            <option value="company_c">Company C</option>
        </select>
    </div>
    <div class="flex flex-col">
        <label>GROUP NUMBER</label>
        <input type="text" class="border p-2 rounded">
    </div>
</div>


<!-- Confirm Button -->
<div class="flex justify-center gap-5 mt-4">
    <button class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white font-bold">
        Confirm Insurance
    </button>
</div> <div class="h-10"></div>


                                            <!-- Insurance Card Section -->
                                            <div class="bg-blue-900 text-white p-4 rounded-lg flex items-center justify-between mb-6">
                                                <div>
                                                    <h3 class="text-lg font-semibold">INSURANCE CARDS</h3>
                                                    <p>SCAN THE FOLLOWING QR CODE TO ACCESS DATA:</p>
                                                </div>
                                                <img src="qr.png" alt="QR Code" class="w-16 h-16">
                                            </div>
                                            <div class="h-20"></div> <!-- Added space at the bottom -->
                                            
                                            <!-- Payment History Section -->
                                            <div class="mb-6">
                                                
                                                <!-- Grid Layout for Inputs -->
                                                <div class="grid grid-cols-3 gap-4 mt-4">
                                                    <div class="flex flex-col">
                                                        <label class="block text-blue-900 text-sm font-medium">Date of Payment</label>
                                                        <input type="date" id="paymentDate" class="border p-2 rounded">
                                                    </div>
                                                    <div class="flex flex-col">
                                                        <label class="block text-blue-900 text-sm font-medium">Time of Payment</label>
                                                        <input type="time" id="paymentTime" class="border p-2 rounded">
                                                    </div>
            <div class="flex flex-col relative">
                <label class="block text-gray-100 text-sm font-medium">System Created by: Adrian Aquino</label>
                <div class="relative w-full">
                    <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-900" 
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                              d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z" />
                    </svg>
                    <input type="text" id="paymentSearchInput" placeholder="Search payments..." 
                           class="p-3 pl-12 border border-blue-900 rounded-full w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                </div>
            </div>

                                                    <div class="flex flex-col">
                                                        <label class="block text-blue-900 text-sm font-medium">Bank</label>
                                                        <input type="text" id="paymentBank" class="border p-2 rounded">
                                                    </div>
                                                    
                                                    <div class="flex flex-col">
                                                        <label class="block text-blue-900 text-sm font-medium">Proof of Payment</label>
                                                        <input type="file" accept="image/*" id="proofOfPaymentInput" class="border p-2 rounded">
                                                    </div>
                                                </div>

                                                <!-- Buttons Below Inputs -->
                                                <div class="flex justify-center gap-4 mt-4">
                                                    <button id="confirmPaymentBtn" class="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white font-bold">Confirm Payment</button>
                                                </div>

                                                <!-- Blue Line -->
                                                <div class="h-1 bg-blue-900 my-4"></div>

                                                <!-- Payments Table -->
<div class="w-full p-2 mt-2 relative overflow-x-auto">
    <table class="w-full border-collapse">
        <thead>
            <tr class="bg-gray-100 border-b border-blue-900">
                <th class="p-3 text-center">DATE/TIME</th>
                <th class="p-3 text-center">BANK</th>
                <th class="p-3 text-center">STATUS</th>
                <th class="p-3 text-center">OR NO.</th>
            </tr>
        </thead>
        <tbody id="paymentTable">
            <!-- Payment history will be dynamically added here -->
        </tbody>
    </table>
</div>

                                            </div>
                                            <div class="h-20"></div> <!-- Added space at the bottom -->
                                        </div>
                                    `;

            const confirmPaymentBtn = document.getElementById("confirmPaymentBtn");
            const paymentTable = document.getElementById("paymentTable");
            const paymentSearchInput = document.getElementById("paymentSearchInput");
            const bellDropdown = document.getElementById("notificationDropdown");
            

            
            confirmPaymentBtn.addEventListener("click", () => {
                const paymentDate = document.getElementById("paymentDate").value;
                const paymentTime = document.getElementById("paymentTime").value;
                const paymentBank = document.getElementById("paymentBank").value;

                // Generate a random OR No.
                const paymentOR = `OR-${Math.floor(100000 + Math.random() * 900000)}`;

                if (paymentDate && paymentTime && paymentBank) {
                    const newRow = document.createElement("tr");
                    newRow.classList.add("text-center", "border-b-2", "border-blue-900");

                    newRow.innerHTML = `
                        <td class="p-2">${paymentDate} ${paymentTime}</td>
                        <td class="p-2">${paymentBank}</td>
                        <td class="p-2">POSTED</td>
                        <td class="p-2 text-blue-900 font-semibold">${paymentOR}</td>
                    `;

                    paymentTable.appendChild(newRow);

                    // Clear the form inputs
                    document.getElementById("paymentDate").value = "";
                    document.getElementById("paymentTime").value = "";
                    document.getElementById("paymentBank").value = "";
                    document.getElementById("proofOfPaymentInput").value = "";

                    // Add a notification to the bell dropdown
                    const notificationItem = document.createElement("div");
                    notificationItem.className = "p-2 border-b border-gray-300 text-blue-900 flex justify-between items-center";

                    // Remove "No new notifications" if it exists
                    const noNotifications = document.getElementById("noNotifications");
                    if (noNotifications) {
                        noNotifications.remove();
                    }

                    // Notification text
                    const notificationText = document.createElement("span");
                    notificationText.textContent = `New payment confirmed: ${paymentBank} on ${paymentDate} at ${paymentTime}`;
                    notificationItem.appendChild(notificationText);

                    // Close icon
                    const closeIcon = document.createElement("span");
                    closeIcon.className = "cursor-pointer text-red-500 ml-2";
                    closeIcon.innerHTML = "&times;";
                    closeIcon.addEventListener("click", (event) => {
                        event.stopPropagation(); // Prevent dropdown from closing
                        notificationItem.remove();
                        updateNotificationCount(-1); // Decrease notification count
                    });
                    notificationItem.appendChild(closeIcon);

                    bellDropdown.appendChild(notificationItem);

                    // Update the notification count on the bell icon
                    updateNotificationCount(1);

                    // Function to update the notification count
                    function updateNotificationCount(change) {
                        const bellIcon = document.getElementById("notificationBell");
                        let count = parseInt(bellIcon.getAttribute("data-count")) || 0;
                        count += change;

                        if (count > 0) {
                            bellIcon.setAttribute("data-count", count);
                            bellIcon.classList.add("relative");
                            if (!bellIcon.querySelector(".notification-badge")) {
                                const badge = document.createElement("span");
                                badge.className = "notification-badge absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1";
                                badge.textContent = count;
                                bellIcon.appendChild(badge);
                            } else {
                                bellIcon.querySelector(".notification-badge").textContent = count;
                            }
                        } else {
                            bellIcon.removeAttribute("data-count");
                            const badge = bellIcon.querySelector(".notification-badge");
                            if (badge) badge.remove();
                        }
                    }
                } else {
                    alert("Please fill in all fields before confirming payment.");
                }
            });

            // Search functionality for OR No.
            paymentSearchInput.addEventListener("input", function () {
                const searchValue = paymentSearchInput.value.toLowerCase();
                const rows = paymentTable.querySelectorAll("tr");

                rows.forEach(row => {
                    const orCell = row.querySelectorAll("td")[3]; // OR number is in the 4th column
                    if (orCell) {
                        const orText = orCell.textContent.toLowerCase();
                        row.style.display = orText.includes(searchValue) ? "" : "none";
                    }
                });
            });        
                       // Add functionality to dynamically update the payment table
// Ensure confirmPaymentBtn is declared only once
confirmPaymentBtn.addEventListener("click", () => {
    const paymentDate = document.getElementById("paymentDate").value;
    const paymentTime = document.getElementById("paymentTime").value;
    const paymentBank = document.getElementById("paymentBank").value;

    // Generate a random OR No.
    const paymentOR = `OR-${Math.floor(100000 + Math.random() * 900000)}`;

    if (paymentDate && paymentTime && paymentBank) {
        const newRow = document.createElement("tr");
        newRow.classList.add("text-center", "border-b-2", "border-blue-900");

        newRow.innerHTML = `
            <td class="p-2">${paymentDate} ${paymentTime}</td>
            <td class="p-2">${paymentBank}</td>
            <td class="p-2">POSTED</td>
            <td class="p-2 text-blue-900 font-semibold">${paymentOR}</td>
        `;

        paymentTable.appendChild(newRow);

        // Clear the form inputs
        document.getElementById("paymentDate").value = "";
        document.getElementById("paymentTime").value = "";
        document.getElementById("paymentBank").value = "";
        document.getElementById("proofOfPaymentInput").value = "";
    } else {
        alert("Please fill in all fields before confirming payment.");
    }
});

// Search functionality for OR No.
paymentSearchInput.addEventListener("input", function () {
    const searchValue = paymentSearchInput.value.toLowerCase();
    const rows = paymentTable.querySelectorAll("tr");

    rows.forEach(row => {
        const orCell = row.querySelectorAll("td")[3]; // OR number is in the 4th column
        if (orCell) {
            const orText = orCell.textContent.toLowerCase();
            row.style.display = orText.includes(searchValue) ? "" : "none";
        }
    });
});

            // Search functionality
            const insuranceSearchInput = document.getElementById("insuranceSearchInput");
            const insuranceTable = document.getElementById("insuranceTable");
            insuranceSearchInput.addEventListener("input", function () {
                const searchValue = insuranceSearchInput.value.toLowerCase();
                const rows = insuranceTable.querySelectorAll("tr");
                rows.forEach(row => {
                  const cells = row.querySelectorAll("td");
                  const match = Array.from(cells).some(cell => cell.textContent.toLowerCase().includes(searchValue));
                  row.style.display = match ? "" : "none";
                });
            });
          
            setActiveButtons(billingsBtn);
          }
        
        

        // ur my home
        setActiveButtons(dashboardBtn, homeBtn);
        

        // listeners 
        dashboardBtn.addEventListener("click", showHome);
        homeBtn.addEventListener("click", showHome);
        patientIndexBtn.addEventListener("click", showPatientIndex);
        registrationBtn.addEventListener("click", showRegistration);
        medicalBtn.addEventListener("click", showMedicalHistory);
        healthBtn.addEventListener("click", showHealthAssessment);
        vitalBtn.addEventListener("click", showVitalSigns);
        labBtn.addEventListener("click", showLabResults);
        marBtn.addEventListener("click", showMAR);
        cdssBtn.addEventListener("click", showCDSS);
        followUpBtn.addEventListener("click", showFollowUp);
        consentFormBtn.addEventListener("click", showConsentForm);
        billingsBtn.addEventListener("click", showBillings);

        //icons 
        document.addEventListener("DOMContentLoaded", function () {
            const bell = document.getElementById("notificationBell");
            const bellDropdown = document.getElementById("notificationDropdown");
            const profile = document.getElementById("profileIcon");
            const profileDropdown = document.getElementById("profileDropdown");
            const logoutBtn = document.getElementById("logoutBtn");

            // Toggle Profile Dropdown
            profile.addEventListener("click", function (event) {
                event.stopPropagation();
                profileDropdown.classList.toggle("hidden");
                bellDropdown.classList.add("hidden"); // Close bell dropdown
            });

            // Toggle Bell Dropdown
            bell.addEventListener("click", function (event) {
                event.stopPropagation();
                bellDropdown.classList.toggle("hidden");
                profileDropdown.classList.add("hidden"); // Close profile dropdown
            });

            // Hide dropdowns when clicking outside
            document.addEventListener("click", function (event) {
                if (!profile.contains(event.target) && !profileDropdown.contains(event.target)) {
                    profileDropdown.classList.add("hidden");
                }
                if (!bell.contains(event.target) && !bellDropdown.contains(event.target)) {
                    bellDropdown.classList.add("hidden");
                }
            });

            // Logout Button Click Event
            if (logoutBtn) {
                logoutBtn.addEventListener("click", function () {
                    window.location.href = "login.html"; // Redirect to login page
                });
            }
        });







