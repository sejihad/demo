function goToPage() {
    const pageNumber = document.getElementById('pageNumber').value.trim();  // Trim any spaces
    
    // Debugging: log the page number entered
    console.log(`Entered page number: ${pageNumber}`);
    
    if (pageNumber) {
        const targetPage = document.getElementById(`page${pageNumber}`);
        
        // Debugging: log whether the target page exists or not
        console.log(targetPage ? `Found target page: page${pageNumber}` : `Target page page${pageNumber} not found`);
        
        if (targetPage) {
            targetPage.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('Page not found');
        }
    } else {
        alert('Please enter a page number');
    }
}

function printPage() {
    window.print();
}


const circle = document.getElementById('circle');
const colorPicker = document.getElementById('colorPicker');

colorPicker.addEventListener('input', (event) => {
    const newColor = event.target.value;
    circle.style.backgroundColor = newColor;
});





document.addEventListener('DOMContentLoaded', () => {
   const imageAreas = [
       
        {
            areaId: 'image-area0',
            inputId: 'file-input0',
            containerId: 'img-container0',
            messageId: 'upload-message0'
        },
        {
            areaId: 'image-area1',
            inputId: 'file-input1',
            containerId: 'img-container1',
            messageId: 'upload-message1'
        },
		{
            areaId: 'image-area2',
            inputId: 'file-input2',
            containerId: 'img-container2',
            messageId: 'upload-message2'
        },
		{
            areaId: 'image-area3',
            inputId: 'file-input3',
            containerId: 'img-container3',
            messageId: 'upload-message3'
        },
		{
            areaId: 'image-area4',
            inputId: 'file-input4',
            containerId: 'img-container4',
            messageId: 'upload-message4'
        },
		{
            areaId: 'image-area5',
            inputId: 'file-input5',
            containerId: 'img-container5',
            messageId: 'upload-message5'
        },
		{
            areaId: 'image-area6',
            inputId: 'file-input6',
            containerId: 'img-container6',
            messageId: 'upload-message6'
        },
		{
            areaId: 'image-area7',
            inputId: 'file-input7',
            containerId: 'img-container7',
            messageId: 'upload-message7'
        },
		{
            areaId: 'image-area8',
            inputId: 'file-input8',
            containerId: 'img-container8',
            messageId: 'upload-message8'
        },
		{
            areaId: 'image-area9',
            inputId: 'file-input9',
            containerId: 'img-container9',
            messageId: 'upload-message9'
        },
		{
            areaId: 'image-area10',
            inputId: 'file-input10',
            containerId: 'img-container10',
            messageId: 'upload-message10'
        },
		{
            areaId: 'image-area11',
            inputId: 'file-input11',
            containerId: 'img-container11',
            messageId: 'upload-message11'
        },
		{
            areaId: 'image-area12',
            inputId: 'file-input12',
            containerId: 'img-container12',
            messageId: 'upload-message12'
        },
		{
            areaId: 'image-area13',
            inputId: 'file-input13',
            containerId: 'img-container13',
            messageId: 'upload-message13'
        },
		{
            areaId: 'image-area14',
            inputId: 'file-input14',
            containerId: 'img-container14',
            messageId: 'upload-message14'
        },
		{
            areaId: 'image-area15',
            inputId: 'file-input15',
            containerId: 'img-container15',
            messageId: 'upload-message15'
        },
		{
            areaId: 'image-area16',
            inputId: 'file-input16',
            containerId: 'img-container16',
            messageId: 'upload-message16'
        },
		{
            areaId: 'image-area17',
            inputId: 'file-input17',
            containerId: 'img-container17',
            messageId: 'upload-message17'
        },
		{
            areaId: 'image-area18',
            inputId: 'file-input18',
            containerId: 'img-container18',
            messageId: 'upload-message18'
        },
		{
            areaId: 'image-area19',
            inputId: 'file-input19',
            containerId: 'img-container19',
            messageId: 'upload-message19'
        },
		{
            areaId: 'image-area20',
            inputId: 'file-input20',
            containerId: 'img-container20',
            messageId: 'upload-message20'
        },
		{
            areaId: 'image-area21',
            inputId: 'file-input21',
            containerId: 'img-container21',
            messageId: 'upload-message21'
        },
		{
            areaId: 'image-area22',
            inputId: 'file-input22',
            containerId: 'img-container22',
            messageId: 'upload-message22'
        },
		{
            areaId: 'image-area23',
            inputId: 'file-input23',
            containerId: 'img-container23',
            messageId: 'upload-message23'
        },
		{
            areaId: 'image-area24',
            inputId: 'file-input24',
            containerId: 'img-container24',
            messageId: 'upload-message24'
        },
		{
            areaId: 'image-area25',
            inputId: 'file-input25',
            containerId: 'img-container25',
            messageId: 'upload-message25'
        },
		{
            areaId: 'image-area26',
            inputId: 'file-input26',
            containerId: 'img-container26',
            messageId: 'upload-message26'
        },
		{
            areaId: 'image-area27',
            inputId: 'file-input27',
            containerId: 'img-container27',
            messageId: 'upload-message27'
        },
		{
            areaId: 'image-area28',
            inputId: 'file-input28',
            containerId: 'img-container28',
            messageId: 'upload-message28'
        },
		{
            areaId: 'image-area29',
            inputId: 'file-input29',
            containerId: 'img-container29',
            messageId: 'upload-message29'
        },
		{
            areaId: 'image-area30',
            inputId: 'file-input30',
            containerId: 'img-container30',
            messageId: 'upload-message30'
        },
		{
            areaId: 'image-area31',
            inputId: 'file-input31',
            containerId: 'img-container31',
            messageId: 'upload-message31'
        },
		{
            areaId: 'image-area32',
            inputId: 'file-input32',
            containerId: 'img-container32',
            messageId: 'upload-message32'
        },
		{
            areaId: 'image-area33',
            inputId: 'file-input33',
            containerId: 'img-container33',
            messageId: 'upload-message33'
        },
		{
            areaId: 'image-area34',
            inputId: 'file-input34',
            containerId: 'img-container34',
            messageId: 'upload-message34'
        },
		{
            areaId: 'image-area35',
            inputId: 'file-input35',
            containerId: 'img-container35',
            messageId: 'upload-message35'
        },
		{
            areaId: 'image-area36',
            inputId: 'file-input36',
            containerId: 'img-container36',
            messageId: 'upload-message36'
        },
		{
            areaId: 'image-area37',
            inputId: 'file-input37',
            containerId: 'img-container37',
            messageId: 'upload-message37'
        },
		{
            areaId: 'image-area38',
            inputId: 'file-input38',
            containerId: 'img-container38',
            messageId: 'upload-message38'
        },
		{
            areaId: 'image-area39',
            inputId: 'file-input39',
            containerId: 'img-container39',
            messageId: 'upload-message39'
        },
		{
            areaId: 'image-area40',
            inputId: 'file-input40',
            containerId: 'img-container40',
            messageId: 'upload-message40'
        },
		{
            areaId: 'image-area41',
            inputId: 'file-input41',
            containerId: 'img-container41',
            messageId: 'upload-message41'
        },
		{
            areaId: 'image-area42',
            inputId: 'file-input42',
            containerId: 'img-container42',
            messageId: 'upload-message42'
        },
		{
            areaId: 'image-area43',
            inputId: 'file-input43',
            containerId: 'img-container43',
            messageId: 'upload-message43'
        },
		{
            areaId: 'image-area44',
            inputId: 'file-input44',
            containerId: 'img-container44',
            messageId: 'upload-message44'
        },{
            areaId: 'image-area45',
            inputId: 'file-input45',
            containerId: 'img-container45',
            messageId: 'upload-message45'
        },{
            areaId: 'image-area46',
            inputId: 'file-input46',
            containerId: 'img-container46',
            messageId: 'upload-message46'
        },{
            areaId: 'image-area47',
            inputId: 'file-input47',
            containerId: 'img-container47',
            messageId: 'upload-message47'
        },{
            areaId: 'image-area48',
            inputId: 'file-input48',
            containerId: 'img-container48',
            messageId: 'upload-message48'
        },{
            areaId: 'image-area49',
            inputId: 'file-input49',
            containerId: 'img-container49',
            messageId: 'upload-message49'
        },{
            areaId: 'image-area50',
            inputId: 'file-input50',
            containerId: 'img-container50',
            messageId: 'upload-message50'
        },{
            areaId: 'image-area51',
            inputId: 'file-input51',
            containerId: 'img-container51',
            messageId: 'upload-message51'
        },{
            areaId: 'image-area52',
            inputId: 'file-input52',
            containerId: 'img-container52',
            messageId: 'upload-message52'
        },{
            areaId: 'image-area53',
            inputId: 'file-input53',
            containerId: 'img-container53',
            messageId: 'upload-message53'
        },{
            areaId: 'image-area54',
            inputId: 'file-input54',
            containerId: 'img-container54',
            messageId: 'upload-message54'
        },{
            areaId: 'image-area55',
            inputId: 'file-input55',
            containerId: 'img-container55',
            messageId: 'upload-message55'
        },{
            areaId: 'image-area56',
            inputId: 'file-input56',
            containerId: 'img-container56',
            messageId: 'upload-message56'
        },{
            areaId: 'image-area57',
            inputId: 'file-input57',
            containerId: 'img-container57',
            messageId: 'upload-message57'
        },{
            areaId: 'image-area58',
            inputId: 'file-input58',
            containerId: 'img-container58',
            messageId: 'upload-message58'
        },{
            areaId: 'image-area59',
            inputId: 'file-input59',
            containerId: 'img-container59',
            messageId: 'upload-message59'
        },{
            areaId: 'image-area60',
            inputId: 'file-input60',
            containerId: 'img-container60',
            messageId: 'upload-message60'
        },{
            areaId: 'image-area61',
            inputId: 'file-input61',
            containerId: 'img-container61',
            messageId: 'upload-message61'
        },{
            areaId: 'image-area62',
            inputId: 'file-input62',
            containerId: 'img-container62',
            messageId: 'upload-message62'
        },{
            areaId: 'image-area63',
            inputId: 'file-input63',
            containerId: 'img-container63',
            messageId: 'upload-message63'
        },{
            areaId: 'image-area64',
            inputId: 'file-input64',
            containerId: 'img-container64',
            messageId: 'upload-message64'
        },{
            areaId: 'image-area65',
            inputId: 'file-input65',
            containerId: 'img-container65',
            messageId: 'upload-message65'
        },{
            areaId: 'image-area66',
            inputId: 'file-input66',
            containerId: 'img-container66',
            messageId: 'upload-message66'
        },{
            areaId: 'image-area67',
            inputId: 'file-input67',
            containerId: 'img-container67',
            messageId: 'upload-message67'
        },{
            areaId: 'image-area68',
            inputId: 'file-input68',
            containerId: 'img-container68',
            messageId: 'upload-message68'
        },{
            areaId: 'image-area69',
            inputId: 'file-input69',
            containerId: 'img-container69',
            messageId: 'upload-message69'
        },{
            areaId: 'image-area70',
            inputId: 'file-input70',
            containerId: 'img-container70',
            messageId: 'upload-message70'
        },{
            areaId: 'image-area71',
            inputId: 'file-input71',
            containerId: 'img-container71',
            messageId: 'upload-message71'
        },{
            areaId: 'image-area72',
            inputId: 'file-input72',
            containerId: 'img-container72',
            messageId: 'upload-message72'
        },{
            areaId: 'image-area73',
            inputId: 'file-input73',
            containerId: 'img-container73',
            messageId: 'upload-message73'
        },{
            areaId: 'image-area74',
            inputId: 'file-input74',
            containerId: 'img-container74',
            messageId: 'upload-message74'
        },{
            areaId: 'image-area75',
            inputId: 'file-input75',
            containerId: 'img-container75',
            messageId: 'upload-message75'
        },{
            areaId: 'image-area76',
            inputId: 'file-input76',
            containerId: 'img-container76',
            messageId: 'upload-message76'
        },{
            areaId: 'image-area77',
            inputId: 'file-input77',
            containerId: 'img-container77',
            messageId: 'upload-message77'
        },{
            areaId: 'image-area78',
            inputId: 'file-input78',
            containerId: 'img-container78',
            messageId: 'upload-message78'
        },{
            areaId: 'image-area79',
            inputId: 'file-input79',
            containerId: 'img-container79',
            messageId: 'upload-message79'
        },{
            areaId: 'image-area80',
            inputId: 'file-input80',
            containerId: 'img-container80',
            messageId: 'upload-message80'
        },{
            areaId: 'image-area81',
            inputId: 'file-input81',
            containerId: 'img-container81',
            messageId: 'upload-message81'
        },{
            areaId: 'image-area82',
            inputId: 'file-input82',
            containerId: 'img-container82',
            messageId: 'upload-message82'
        },{
            areaId: 'image-area83',
            inputId: 'file-input83',
            containerId: 'img-container83',
            messageId: 'upload-message83'
        },
		
        // Add more image areas as needed
    ];

    imageAreas.forEach(({ areaId, inputId, containerId, messageId }) => {
        const imageArea = document.getElementById(areaId);
        const fileInput = document.getElementById(inputId);
        const imgContainer = document.getElementById(containerId);
        const uploadMessage = document.getElementById(messageId);
    
        // Debugging: log whether elements are found or not
      
        if (!imageArea || !fileInput || !imgContainer || !uploadMessage) {
            console.error('One or more elements are missing for:', { areaId, inputId, containerId, messageId });
            return; // Skip this iteration if an element is missing
        }
    
        imageArea.addEventListener('click', () => {
            fileInput.click();
        });
    
        fileInput.addEventListener('change', (e) => {
            handleFileUpload(e.target.files[0], imgContainer, uploadMessage);
        });
    
        imageArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            imageArea.style.backgroundColor = '#e0e0e0';
        });
    
        imageArea.addEventListener('dragleave', (e) => {
            e.preventDefault();
            imageArea.style.backgroundColor = '';
        });
    
        imageArea.addEventListener('drop', (e) => {
            e.preventDefault();
            imageArea.style.backgroundColor = '';
            handleFileUpload(e.dataTransfer.files[0], imgContainer, uploadMessage);
        });
    });

    function handleFileUpload(file, imgContainer, uploadMessage) {
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                imgContainer.innerHTML = `
                    <div class="img-wrapper" style="position: relative; display: inline-block;">
                        <img src="${event.target.result}" alt="Uploaded Image" >
                        <span class="remove-btn" style="position: absolute; top: 5px; right: 5px; cursor: pointer; background-color: red; color: white; border-radius: 50%; padding: 2px 5px;">&times;</span>
                    </div>
                `;
                imgContainer.style.display = 'block';
                uploadMessage.style.display = 'none';

                // Add event listener to the remove button
                const removeBtn = imgContainer.querySelector('.remove-btn');
                removeBtn.addEventListener('click', () => {
                    imgContainer.innerHTML = '';
                    uploadMessage.style.display = 'block'; // Show the message again
                });
            };
            reader.readAsDataURL(file);
        }
    }
});

