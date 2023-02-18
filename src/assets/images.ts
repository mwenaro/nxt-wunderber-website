import { IImage } from "../types";
const imagesPath = '/assets/images/'

 const generatredImages:IImage[] =[
];
 const generatredCarouselImages:IImage[] =[
];
for(let i=1; i <=27; i++){
generatredImages.push(
    {
        src:`${imagesPath}4.3/pic${i}.jpg`,
        des:`Image ${i}`
    }
)
}

for(let i=1; i <=10; i++){
generatredCarouselImages.push(
    {
        src:`${imagesPath}img/${i}.jpg`,
        des:`Image ${i}`
    }
)
}


export const images = generatredImages;
export const carouselImages = generatredCarouselImages;

