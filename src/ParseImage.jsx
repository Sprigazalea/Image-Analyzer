import exifr from "exifr";

export default function ParseImage(imageFile) {

    const Output = () => {
        exifr.parse(imageFile).then((value) => {
            const reader = new FileReader();
            const rawOutput = JSON.stringify(value, null, 1);

            //console.log(imageFile)
            //console.log(imageFile.name)
            //console.log(imageFile.lastModified)
            //console.log(imageFile.webkitRelativePath)
            //console.log(imageFile.size)
            //console.log(imageFile.type)
            //console.log(JSON.stringify(value))

            const formattedString = rawOutput

            console.log(formattedString)

            textarea.value = formattedString;
        })
    }

    return (
        Output()
    )
}

//might need to research how to organize react files in a file system

// 1. turn rawOutput into a string
// 2. use split and join to add line breaks
// 3. add {} at beginning and end with line breaks to replicate json look
// or
// 1. turn rawOutput into a string
// 2. use str.replace()

// str.replace seems to make the most sense