import exifr from "exifr";

export default function ParseImage(imageFile, imageFileName) {
    //console.log(imageFile)
    //console.log(imageFileName)

    return (
        exifr.parse(imageFile).then((value) => {
            const reader = new FileReader();

            console.log(imageFile)
            console.log(imageFile.name)
            console.log(imageFile.lastModified)
            console.log(imageFile.webkitRelativePath)
            console.log(imageFile.size)
            console.log(imageFile.type)
            console.log(JSON.stringify(value))
        })
    )
}

//might need to research how to organize react files in a file system