let m1 = document.getElementById("mah-form");
const m2 = () => {
    let m3 = localStorage.getItem("mah-ent");
    if(m3){
        m3 = JSON.parse(m3);

    }else{
        m3 = [];
    }
    return m3;
};

let m4 = m2();
const m5 = () =>{
    const m6 = m2();
    const m7 = m6.map((entry) => {
        
        const namemah = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailmah = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordmah = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobmah = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsmah = `<td class='border px-4 py-2'>${entry.acceptedTermsAndConditions}</td>`;
        const rowmah = `<tr>${namemah} ${emailmah} ${passwordmah} ${dobmah} ${acceptTermsmah}</tr>`;
        return rowmah;
    }).join("\n");
    const table= `<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">Dob</th>
    <th class="px-4 py-2">Accepted terms?</th>
    </tr>${m7} </table>`;
    let details = document.getElementById("mah-ent");
    details.innerHTML = table;
}
const m8 = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const acceptedTermsAndConditions = document.getElementById("acceptTerms").checked;
    const entry = {
        name,
        email,
        password,
        dob,
        acceptedTermsAndConditions,
    };
    m4.push(entry);
    localStorage.setItem("mah-ent", JSON.stringify(m4));
    m5();
}
m1.addEventListener("submit",m8);
m5();
//----------------------------------------------------------DATE VALIDATION-----------------------------------------

   
        function ganval8()
        {   let element = document.getElementById("dob");
            const dob = document.getElementById("dob").value;
            let mam1 = new Date(dob);
            var todaydate = new Date(); 
            var age=parseInt(todaydate.getFullYear()) - parseInt(mam1.getFullYear());
            if (todaydate.getMonth() < mam1.getMonth() || (todaydate.getMonth() === mam1.getMonth() && todaydate.getDate() < mam1.getDate()))
             age--;
            if(!(age > 18 && age < 55))
            {
                element.setCustomValidity(" Entered age is not valid and age should between 18 and 55");
                element.reportValidity();
            }
            else{
            element.setCustomValidity("");
            }
        }

//=======================================email=========================================
