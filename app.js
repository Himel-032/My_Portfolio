

const sections= document.querySelectorAll('.section');
const sectBtns= document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections =document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn', '');
            this.className +=' active-btn';
        });
    }
    // sections avtive class
    allSections.addEventListener('click',(e) =>{
        console.log(e.target);
        const id=e.target.dataset.id;
        if(id){
            // remove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active');
            });
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active');
            });
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    // Toggle theme 
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element= document.body;
        element.classList.toggle('light-mode');
    })
 }






PageTransitions();




// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.control');
// const allSections = document.querySelector('.main-content');

// function PageTransitions() {
//     // Button click active class
//     sectBtns.forEach((btn) => {
//         btn.addEventListener('click', function () {
//             // Remove active-btn from the currently active button
//             let currentBtn = document.querySelector('.active-btn');
//             if (currentBtn) {
//                 currentBtn.classList.remove('active-btn');
//             }

//             // Add active-btn to the clicked button
//             this.classList.add('active-btn');

//             // Get the id of the target section
//             const id = this.dataset.id;
//             if (id) {
//                 // Hide all sections
//                 sections.forEach((section) => {
//                     section.classList.remove('active');
//                 });

//                 // Show the selected section
//                 document.getElementById(id).classList.add('active');
//             }
//         });
//     });
// }

// Initialize page transitions


//PageTransitions();
// const sections = document.querySelectorAll('.section');
// const sectBtns = document.querySelectorAll('.control');

// function PageTransitions() {
//     // Button click active class
//     sectBtns.forEach((btn) => {
//         btn.addEventListener('click', function () {
//             // Remove active-btn from the currently active button
//             const currentBtn = document.querySelector('.active-btn');
//             if (currentBtn) {
//                 currentBtn.classList.remove('active-btn');
//             }

//             // Add active-btn to the clicked button
//             this.classList.add('active-btn');

//             // Get the id of the target section from the button's data-id
//             const id = this.dataset.id;
//             if (id) {
//                 // Hide all sections
//                 sections.forEach((section) => {
//                     section.classList.remove('active');
//                 });

//                 // Show the selected section
//                 const element = document.getElementById(id);
//                 if (element) {
//                     element.classList.add('active');
//                 }
//             }
//         });
//     });
// }

// // Initialize page transitions
// PageTransitions();

  
