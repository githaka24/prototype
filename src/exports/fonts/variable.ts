import localFont from 'next/font/local';

export const sourceCodePro = localFont({
    src: [
        {
            path: '../../fonts/variable/Source_Code_Pro/SourceCodePro-VariableFont_wght.ttf',
            style: 'normal',
        },
        {
            path: '../../fonts/variable/Source_Code_Pro/SourceCodePro-Italic-VariableFont_wght.ttf',
            style: 'italic',
        },
    ],
});

export const workSans = localFont({
    src: [
        {
            path: '../../fonts/variable/Work_Sans/WorkSans-VariableFont_wght.ttf',
            style: 'normal',
        },
        {
            path: '../../fonts/variable/Work_Sans/WorkSans-Italic-VariableFont_wght.ttf',
            style: 'italic',
        },
    ],
});
