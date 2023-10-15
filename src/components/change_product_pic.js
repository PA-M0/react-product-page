

export const Change_product_pic = () => {
//show more images product
    const morePic = document.getElementsByClassName("morePic");
    let image_id = undefined

    const is_pressed = e => {
        console.log(e.target)
        image_id = e.target.id // Get ID of Clicked Element


        const change_image = (image_id) => {
            image_id = document.getElementById(image_id).src
            document.getElementById('image_preview').src = image_id
        }
        change_image(image_id)


    }


    for (let image of morePic) {
        image.addEventListener("click", is_pressed);

    }
}

