import exifr from "exifr";

export default function ParseImage(imageFile) {

    const Output = () => {
        exifr.parse(imageFile).then((value) => {
            const rawOutput = JSON.stringify(value, null, 1);

            const formattedString = rawOutput

            console.log(formattedString)

            textarea.value = formattedString;
        })
    }

    return (
        Output()
    )
}