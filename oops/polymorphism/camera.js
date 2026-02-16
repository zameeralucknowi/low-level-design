class Camera{
    constructor(size,fileType,details){
        this.size = size;
        this.fileType = fileType;
        this.details = details;
    }

    click(){
        console.log('button is clicked')
    }
}

class Photo extends Camera{
    constructor(size,fileType,details){
        super(size,fileType,details);
    }

    click(){
        console.log('photo is clicked')
    }
}

class Video extends Camera{
    constructor(size,fileType,details){
        super(size,fileType,details)
    }

    click(){
        console.log('video is made')
    }
}

const arr = [ new Camera(200,'png','xyz'), new Photo(400,'JPG','7454'), new Video(888,'mp4','45klk') ];
arr.forEach((ele)=>{
    ele.click();
})