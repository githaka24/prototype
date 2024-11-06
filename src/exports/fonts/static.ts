import localFont from 'next/font/local';

export const ubuntu = localFont({
    src: [
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-Light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-LightItalic.ttf',
            weight: '300',
            style: 'italic',
        },
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-Regular.ttf',
            weight: '400',
            style: 'regular',
        },
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-Medium.ttf',
            weight: '500',
            style: 'regular',
        },
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-MediumItalic.ttf',
            weight: '500',
            style: 'italic',
        },
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-Bold.ttf',
            weight: '700',
            style: 'regular',
        },
        {
            path: '../../fonts/static/Ubuntu/Ubuntu-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        },
    ],
});
