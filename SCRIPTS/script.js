const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const backdrop = document.querySelector('.back-drop');

burger.addEventListener('click', () => {
    burger.classList.toggle('show-burger');
    nav.classList.toggle('show-nav');
    backdrop.classList.toggle('show-backdrop');
});


// MODAL
const apply = document.querySelector('.apply')
const modalBackDrop = document.querySelector('.modalBackDrop')
const modal = document.querySelector('.modal')
// const modalHeader = document.querySelector('.modalHeader')
const modalCloseButton = document.querySelector('.modalCloseButton')
const modalContent = document.querySelector('.modalContent')
const modalApplyButton =  document.querySelector('.modalApplyButton')
const message = document.querySelector('.message')

let timer

const remover = () => {
    if(timer) {
        clearTimeout(timer)
    }
    modalBackDrop.classList.remove('modalBackDropActive')
    modal.classList.remove('modalActive')
}

apply.addEventListener('click', () => {
    modalBackDrop.classList.add('modalBackDropActive')
    modal.classList.add('modalActive')
})

modalBackDrop.addEventListener('click', remover)
modalCloseButton.addEventListener('click', remover)

modal.addEventListener('click', (e) => {
    console.dir(e);
    e.stopPropagation()
})

modalApplyButton.addEventListener('click', () => {
    modalContent.classList.add('hideContent')
    message.innerHTML = `
    <div class="message">
        <h2>Thank You</h2>
        <p>Our operator will call you back</p>
    </div>
    `
    timer = setTimeout(remover, 2000)
})

apply.addEventListener('click', () => {
    modalContent.classList.remove('hideContent')
    // очищение поля
    message.innerHTML = ''
})
// MODAL

// TG

const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')
const forma = document.querySelector('.formа')
const btn = document.querySelector('.modalApplyButton')

// btn.addEventListener('click', () => {
//     // alert(`${messageOne.value} ${messageTwo.value}`)
// })

const bot = {
    TOKEN:'6247467108:AAEOHGSsKEB5ABxYaZD_ofpxGZfKy0oY1LA', 
    chatId:'-980149216'
}

https://api.telegram.org/bot/sendMessage?chat_id=&text=1

forma.addEventListener('submit', (e) => {
    //Останавливает перезагрузку страницы(событие?)
    e.preventDefault()
    if(messageOne.value && messageTwo.value) {
        const telegramMessage = `name:${messageOne.value} number:${messageTwo.value}`
        const TELEGRAM_API = `
        https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatId}&text=${telegramMessage}`
        fetch(TELEGRAM_API)
            .then(Response => {
                console.log(Response);
                if(Response.ok) {
                    alert('message success')
                }
            })
            .catch(error => {
                alert('error')
            })
    }else {
        alert('not validated')
    }
}) 

// TG

//swiper
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 5,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
});
//swiper


// catalog

const dataAlt = [

    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/2021-lamborghini-urus-green-1592400029.jpg?crop=0.889xw:1.00xh;0.0561xw,0&resize=640:*',
        link: 'Lamborghini Urus (SUV)',
        price: 'Base price: US$203,995',
        engine: 'Engine: 4L Twin-Turbo V8',
        power: 'Power: 641 hp @ 6,000 rpm',
        torque: 'Torque: 627 lb-ft @ 2,250 rpm',
        mph: '0-60 mph: 3.2 seconds',
        speed: 'Top Speed: 190 mph',
        category: 'Urus'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2020/11/lamborghini-hurcan-evo-neon3-1024x576.jpg',
        link: 'Lamborghini Huracan Tecnica' ,
        price: 'Base price: US$275,000' ,
        engine: 'Engine: 5.2L Nat Aspirated V10' ,
        power:  '631 hp @ 8,000 rpm' ,
        torque: 'Torque: 417 lb-ft @ 6,500 rpm' ,
        mph:    '0-60 mph: 2.8 seconds' ,
        speed: 'Top Speed: 202 mph',
        category: 'Huracan'
    },
    {
        img: 'https://www.motortrend.com/uploads/sites/5/2020/05/2021-Lamborghini-Huracan-Evo-RWD-Spyder-7.jpg',
        link: 'Lamborghini Huracan Evo RWD Spyder' ,
        price: 'Base price: US$179,000' ,
        engine: 'Engine: 5.2L Nat Aspirated V10',
        power: 'Power: 610 hp @ 8,000 rpm', 
        torque: 'Torque: 413 lb-ft @ 6,500 rpm',
        mph: '0-60 mph: 2.9 seconds',
        speed: 'Top Speed: 202 mph',
        category: 'Huracan'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2023/03/639410-1536x1024.jpg',
        link: 'Lamborghini Revuelto' ,
        price: 'Base price: US$890,000 (est)' ,
        engine: 'Engine: 6.5L Nat Aspirated V12 + 3 hybrid DC motors',
        power: 'Power: Combined 1,001 hp @ 9,250 rpm', 
        torque: 'Torque: Combined 783 lb-ft @ 6,750 rpm',
        mph: '0-60 mph: <2.5 seconds',
        speed: 'Top Speed: >215 mph',
        category: 'Revuelto'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2020/11/Lamborghini-Huraca%CC%81n-STO-new-4-1024x576.jpg',
        link: 'Lamborghini Huracan STO' ,
        price: 'Base price: US$331,100' ,
        engine: 'Engine: 5.2L Nat Aspirated V10',
        power: 'Power: 631 hp @ 8,000 rpm', 
        torque: 'Torque: 417 lb-ft @ 6,500 rpm',
        mph: '0-60 mph: 2.6 seconds',
        speed: 'Top Speed: 193 mph',
        category: 'Huracan'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2020/09/532996-2048x1365.jpg',
        link: 'Lamborghini Huracan Evo' ,
        price: 'Base price: US$261,274' ,
        engine: 'Engine: 5.2L Nat Aspirated V10',
        power: 'Power: 631 hp @ 8,000 rpm', 
        torque: 'Torque: 443 lb-ft @ 6,500 rpm',
        mph: '0-60 mph: 2.9 seconds',
        speed: 'Top Speed: 202 mph',
        category: 'Huracan'
    },
    {
        img: 'https://cdn.motor1.com/images/mgl/GNEGJ/s1/lamborghini-huracan-evo-spyder.jpg',
        link: 'Lamborghini Huracan Evo Spyder' ,
        price: 'Base price: US$247,400' ,
        engine: 'Engine: 5.2L Nat Aspirated V10',
        power: 'Power: 631 hp @ 8,000 rpm', 
        torque: 'Torque: 443 lb-ft @ 6,500 rpm',
        mph: '0-60 mph: 3.1 seconds',
        speed: 'Top Speed: 202 mph',
        category: 'Huracan'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2020/01/Huracan-Evo-11.jpg',
        link: 'Lamborghini Huracan Evo RWD' ,
        price: 'Base price: US$179,000' ,
        engine: 'Engine: 5.2L Nat Aspirated V10',
        power: 'Power: 610 hp @ 8,000 rpm', 
        torque: 'Torque: 413 lb-ft @ 6,500 rpm',
        mph: '0-60 mph: 2.9 seconds',
        speed: 'Top Speed: 202 mph',
        category: 'Huracan'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2016/04/1976_Lamborghini_CountachLP400Periscopo2.jpg',
        link: 'Lamborghini Countach LP500 S Turbo' ,
        price: 'Years: 1984' ,
        engine: 'Engine: 4.8L Twin-Turbo V12',
        power: 'Power: 748 bhp', 
        torque: 'Torque: 646 ft lbs',
        mph: '0-60 mph: 3.7 seconds',
        speed: 'Top Speed: 208 mph',
        category: 'Countach'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2016/04/1110173-15361-770x513.jpg',
        link: 'Lamborghini Diablo GT' ,
        price: 'Years: 1999' ,
        engine: 'Engine: 6.0L Nat Aspirated V12',
        power: 'Power: 575 bhp @ 7,300 rpm', 
        torque: 'Torque: 465 ft lbs @ 5,500 rpm',
        mph: '0-60 mph: 3.6 seconds',
        speed: 'Top Speed: 215 mph',
        category: 'Diablo'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2016/04/2009_Lamborghini_MurcilagoLP6504Roadster2.jpg',
        link: 'Lamborghini Murcielago LP650–4 Roadster' ,
        price: 'Years: 2009' ,
        engine: 'Engine: 6.5L Nat Aspirated V12',
        power: 'Power: 670 bhp @ 8,000 rpm', 
        torque: 'Torque: 478 ft lbs @ 6,500 rpm',
        mph: '0-60 mph: 3.3 seconds',
        speed: 'Top Speed: 205 mph',
        category: 'Murcielago'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2016/04/2008_Lamborghini_GallardoSuperleggera2-770x513.jpg',
        link: 'Lamborghini Gallardo Superleggera' ,
        price: 'Years: 2007 – 2008' ,
        engine: 'Engine: 5.0L Nat Aspirated V10',
        power: 'Power: 530 bhp @ 8000 rpm', 
        torque: 'Torque: 376.2 ft lbs @ 4500 rpm',
        mph: '0-60 mph: 3.8 seconds',
        speed: 'Top Speed: 196 mph',
        category: 'Gallardo'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2020/07/Lamborghini-Aventador-SVJ-Xago-Edition-11-770x513.jpg',
        link: 'Aventador SVJ Roadster' ,
        price: 'Base price: US$573,966' ,
        engine: 'Engine: 6.5L Nat Aspirated V12',
        power: 'Power: 760 hp @ 8,500 rpm', 
        torque: 'Torque: 531 lb-ft @ 6,750 rpm',
        mph: '0-60 mph: 2.8 seconds',
        speed: 'Top Speed: 217+ mph',
        category: 'Aventador'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2018/03/Huracan-Performante-Spyder-Geneva-370x247.jpg',
        link: 'Lamborghini Huracan Performante Spyder' ,
        price: 'Years: 2018 - 2019' ,
        engine: 'Engine: 5.2L Nat Aspirated V10',
        power: 'Power: 631 hp @ 8,000 rpm', 
        torque: 'Torque: 443 lb-ft @ 6,500 rpm',
        mph: '0-60 mph: 3.0 seconds',
        speed: 'Top Speed: 201 mph',
        category: 'Huracan'
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2023/03/2008_lamborghini_reventon_DSC_5531-69611-500x333.png',
        link: 'Lamborghini Reventon' ,
        price: 'Years: 2007 - 2009' ,
        engine: 'Engine: 6.5L Nat Aspirated V12',
        power: 'Power: 641 hp @ 8,000 rpm', 
        torque: 'Torque: 487 lb-ft @ 6,000 rpm',
        mph: '0-60 mph: 3.4 seconds',
        speed: 'Top Speed: 210 mph',
        category: 'Reventon'
    },
]

const output = document.querySelector('.output');


const categoriesRender = (data) => {
    output.innerHTML = '';
    data.forEach(el => {
    const wrap = document.createElement('div');
    const image = document.createElement('img');
    const category = document.createElement('p')
    const link = document.createElement('p');
    const price = document.createElement('p');
    const engine = document.createElement('p');
    const power = document.createElement('p');
    const torque = document.createElement('p');
    const mph = document.createElement('p');
    const speed = document.createElement('p');
    const show = document.createElement('button');
    // const category = document.createElement('p')

    // link.classList = 'linkbtn';
    wrap.classList = 'wrap';

    
    show.textContent = 'More info';
    image.src = el.img;
    category.textContent = el.link
    // name.textContent = el.name;

    show.addEventListener('click', () => {
        const isVisible = link.classList.toggle('show-info');
        if (isVisible) {
        link.textContent = el.link;
        price.textContent = el.price;
        engine.textContent = el.engine;
        power.textContent = el.power;
        torque.textContent = el.torque;
        mph.textContent = el.mph;   
        speed.textContent = el.speed;
        show.textContent = 'Close info';
        } else {
            link.textContent = '' ;
            price.textContent = '' ;
            engine.textContent = '' ;
            power.textContent = '' ;
            torque.textContent = '' ;
            mph.textContent = '' ;
            speed.textContent = '' ;
        show.textContent = 'More info';
        }
    });

    wrap.append(image, category, show, price, engine, power, torque, mph, speed);
    output.append(wrap);
    });
};

categoriesRender(dataAlt);



const form = document.querySelector('#form1')
const search = document.querySelector('.search')
const buttonX = document.querySelector('.buttonX')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value.trim().toLowerCase();
    const searchResults = dataAlt.filter((item) =>
    item.link.toLowerCase().includes(searchTerm)
    );

    categoriesRender(searchResults);
});


buttonX.addEventListener('click', () => {
    search.value = ''
})

const categoryChoice = ['All','Urus','Huracan','Revuelto', 'Countach', 'Murcielago', 'Diablo', 'Gallardo', 'Aventador', 'Reventon' ]

const onButtonClickRenderItems = () => {
    const categoriesWrap = document.querySelector('.categories__choice')

    categoryChoice.forEach(el => {
        const option = document.createElement('option')

        option.textContent = el
        option.value = el
        option.classList = 'categoryBtn'

        categoriesWrap.addEventListener('change', () => {const selectedCategory = categoriesWrap.value
            if(selectedCategory === 'All') {
                categoriesRender(dataAlt)
                title.textContent = el
            } else {
                const result = dataAlt.filter(item => {
                    return item.category === selectedCategory  
                })
                categoriesRender(result)
                title.textContent = el
            }
        })
        categoriesWrap.append(option)
    })

}

onButtonClickRenderItems()


const onButtonClickRenderItems2 = () => {
    const categoriesWrap = document.querySelector('.categories__choise')
    
    categoryChoice.forEach(element => { 
        const button = document.createElement('button')
        const title = document.querySelector('.h22')
        
        button.textContent = element
        button.classList = 'categories__btn'
        button.addEventListener('click', () => {
            
            if (element === 'All') {
                categoriesRender(dataAlt)
                // title.textContent = element
            } else {
                const result = dataAlt.filter(item => {
                    // title.textContent = element
                    return item.category === element
                })
                categoriesRender(result)
            }
        })
        categoriesWrap.append(button)
    })

}
onButtonClickRenderItems2()

const categories__click = () => {
    const categories = document.querySelectorAll('.categories__btn')
    categories.forEach(el => {
        el.addEventListener('click', () => {
            categories.forEach(btn => {
                btn.classList.remove('btnActive');
            })
            el.classList.add('btnActive');
        })
    });

}
categories__click()

// catalog


//Accrdeon
const data1 = [
    {
        title: 'Automobiles',
        text: 'As of the 2018 model year, Lamborghini s automobile product range consists of three model lines, two of which are mid-engine two-seat sports cars while the third one is a front engined, all-wheel drive SUV.',
        text2: '', 
        text3: ''
    },
    
    {
        title: 'Models in production',
        text: 'Aventador',
        text2: 'Main article: Lamborghini Aventador',
        text3: 'The current V12-powered Aventador production line consists of the LP 740–4 Aventador Ultimate and SVJ coupés and roadsters and it is said that the production of all Aventador models will end in 2022.'
    },
];

const data2 = [
    {
        title: 'Models in production',
        text: 'Huracán',
        text2: 'Main article: Lamborghini Huracán',
        text3: 'The V10-powered Huracán line currently includes the all-wheel-drive LP 610-4 coupé and Spyder, the low cost rear-wheel-drive LP 580-2 coupé and Spyder and the most powerful, track oriented LP 640-4 Performanté coupé and Spyder..'
    },
    {
        title: 'Models in production',
        text: 'Urus',
        text2: 'Main article: Lamborghini Urus',
        text3: 'With the intention of doubling its sales volume by 2019, Lamborghini also added an SUV named Urus in its line-up which is powered by a twin-turbo V8 engine and utilises a front engine, all-wheel drive layout.'
    },
];

const accordionContainer1 = document.querySelector('.accordion-container-1');
const accordionContainer2 = document.querySelector('.accordion-container-2');

const createAccordionItem = (title, text, text2, text3) => {
    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accord__wrap');

    const accordionName = document.createElement('div');
    accordionName.classList.add('accord__name');
    accordionName.innerHTML = `
        <p>${title}</p>
        <img class="plus" src="./IMG/lamborghini-logo-drawn-logo-lamborghini-pencil-and-color-drawn-logo-11.png" alt="">
    `;

    const accordionContent = document.createElement('div');
    accordionContent.classList.add('accord__content');
    accordionContent.innerHTML = `
        <p>${text3}</p>
        <p>${text2}</p>
        <p>${text}</p>
    `;

    accordionItem.appendChild(accordionName);
    accordionItem.appendChild(accordionContent);

    return accordionItem;
};

const accordRender = (container, data) => {
    data.forEach((el) => {
        const accordionItem = createAccordionItem(el.title, el.text, el.text2, el.text3);
        container.appendChild(accordionItem);
    });
};

const toggleAccordion = (accordionItem) => {
    accordionItem.classList.toggle('accordActive');
};

const closeOtherAccordions = (container, currentAccordion) => {
    const accordItems = container.querySelectorAll('.accord__wrap');
    accordItems.forEach((item) => {
        if (item !== currentAccordion) {
            item.classList.remove('accordActive');
        }
    });
};

const accord = (container) => {
    const accordItems = container.querySelectorAll('.accord__wrap');

    accordItems.forEach((item) => {
        item.addEventListener('click', () => {
            toggleAccordion(item);
            closeOtherAccordions(container, item);
        });
    });
};

accordRender(accordionContainer1, data1);
accordRender(accordionContainer2, data2);

accord(accordionContainer1);
accord(accordionContainer2);

//Accrdeon

const cars = [
    {
        img: 'https://imgd.aeplcdn.com/1200x900/cw/ec/32650/Lamborghini-Urus-Exterior-116676.jpg?wm=0',
        link: 'Lamborghini Urus (SUV)',
        price: 'Base price: US$203,995',
    },
    {
        img: 'https://manofmany.com/wp-content/uploads/2022/04/Lamborghini-Technica-front-angle.png',
        link: 'Lamborghini Huracan Tecnica' ,
        price: 'Base price: US$275,000' ,
        
    },
    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/2020-lamborghini-huracan-evo-spyder-drive-111-1564544744.jpg?crop=0.8148148148148148xw:1xh;center,top&resize=1200:*',
        link: 'Lamborghini Huracan Evo RWD Spyder' ,
        price: 'Base price: US$179,000' ,
        
    },
    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/639366-642edad8bea12.jpg?crop=0.8xw:1xh;center,top&resize=1200:*',
        link: 'Lamborghini Revuelto' ,
        price: 'Base price: US$890,000 (est)' ,
        
    },
    {
        img: 'https://imgd.aeplcdn.com/1200x900/n/cw/ec/98405/left-front-three-quarter6.jpeg?wm=0',
        link: 'Lamborghini Huracan STO' ,
        price: 'Base price: US$331,100' ,
        
    },
    {
        img: 'https://imgd.aeplcdn.com/1200x900/cw/ec/37794/Lamborghini-Huracan-Exterior-145770.jpg?wm=0',
        link: 'Lamborghini Huracan Evo' ,
        price: 'Base price: US$261,274' ,
        
    },
    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/560515-1588855324.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
        link: 'Lamborghini Huracan Evo Spyder' ,
        price: 'Base price: US$247,400' ,
        
    },
    {
        img: 'https://www.expressandstar.com/resizer/0tsMFE92kIkZixiN06xVULiavZc=/1200x0/cloudfront-us-east-1.images.arcpublishing.com/mna/5KSXE2AK45AQDMGN3D5T3ZDKH4.jpg',
        link: 'Lamborghini Huracan Evo RWD' ,
        price: 'Base price: US$179,000' ,
        
    },
    {
        img: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_blog_large/v1/editorial/1984-Lamborghini-Countach-LP500-Turbo-S-Blue-Coupe-gtplanet-1200x800p-1.jpg',
        link: 'Lamborghini Countach LP500 S Turbo' ,
        price: 'Years: 1984' ,
        
    },
    {
        img: 'https://top-car.ru/upload/gallery/big/b1939baca93aea74dec6bfe064316027.jpg',
        link: 'Lamborghini Diablo GT' ,
        price: 'Years: 1999' ,
        
    },
    {
        img: 'https://www.supercars.net/blog/wp-content/uploads/2016/04/2009_Lamborghini_MurcilagoLP6504Roadster2.jpg',
        link: 'Lamborghini Murcielago LP650–4 Roadster' ,
        price: 'Years: 2009' ,
        
    },
    {
        img: 'https://imgd.aeplcdn.com/1200x900/ec/51/e1/11185/img/orig/Lamborghini-Gallardo-Right-Front-Three-Quater-19900.jpg?t=124959750&t=124959750',
        link: 'Lamborghini Gallardo Superleggera' ,
        
    },
    { 
        img: 'https://moneyinc.com/wp-content/uploads/2020/01/05-2020-lamborghini-aventador-svj-roadster.jpg',
        link: 'Aventador SVJ Roadster' ,
        price: 'Base price: US$573,966' ,
        
    },
    {
        img: 'https://www.avtorinok.ru/cache/photo/pics/lamborghini/huracan-performante-spyder/193902-gthumb-gwdata1200-ghdata1000-gfitdatamax.jpg',
        link: 'Lamborghini Huracan Performante Spyder' ,
        price: 'Years: 2018 - 2019' ,
        
    },
    {
        img: 'https://hips.hearstapps.com/hmg-prod/images/2008-lamborghini-reventon1233180-1666618518.jpg?crop=0.889xw:1xh;center,top&resize=1200:*',
        link: 'Lamborghini Reventon' ,
        price: 'Years: 2007 - 2009' ,
        
    },
  ];

  const carList = document.getElementById('carList');
  const selectedCar = document.getElementById('selectedCar');

  // Render car list
  cars.forEach((car, index) => {
    const carItem = document.createElement('div');
    carItem.classList.add('car-item');
    carItem.textContent = car.link;

    carItem.addEventListener('click', () => {
      renderSelectedCar(index);
    });

    carList.appendChild(carItem);
  });

  // Render selected car
  function renderSelectedCar(index) {
    selectedCar.innerHTML = '';

    const car = cars[index];

    const carInfo = document.createElement('div');
carInfo.innerHTML = `
  <h2>${car.link}</h2>
  <p>${car.price}</p>
`;

const carImage = document.createElement('img');
carImage.src = car.img;
carImage.alt = car.link;
carImage.classList.add('car-image');

selectedCar.appendChild(carInfo);
selectedCar.appendChild(carImage);
  }



  function initMap() {
    var location = { lat: 42.8700000, lng: 74.5900000 }; // Замените ВАША_ШИРОТА и ВАША_ДОЛГОТА на координаты вашей локации
  
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: location
    });
  
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
  }
  
  // Загрузка карты после загрузки страницы
  window.onload = function() {
    initMap();
  };