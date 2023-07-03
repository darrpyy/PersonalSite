import typescript from '@rollup/plugin-typescript';

export default {
    plugins: [typescript()],
};

// @ts-ignore
document.getElementById("gh-link").onclick = function () {
    location.href = 'https://github.com/darrpyy';

}

