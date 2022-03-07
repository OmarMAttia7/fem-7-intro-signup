module.exports = {
    content: ["./src/**/*.{html,js}"],

    theme: {
        colors: {
            red: "hsl(0, 100%, 74%)",
            green: "hsl(154, 59%, 51%)",
            blue: "hsl(248, 32%, 49%)",
            darkblue: "hsl(249, 10%, 26%)",
            grayblue: "hsl(246, 25%, 77%)",
            white: "#fff"
        },
        extend: {

            fontFamily: {
                'main': ['Poppins', 'Arial', 'Helvetica', 'sans-serif']
            },

            backgroundImage: {
                'mobile': 'url(./images/bg-intro-mobile.png)'
            },

            backgroundColor: {
                'mobile': 'hsla(0, 100%, 74%, 95%)'
            }

        },

    },

    plugins: [

    ],
}