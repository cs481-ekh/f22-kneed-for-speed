const canvas = require('../js/canvas');

test('Heatmap', () => {
    test('colors', () => {
        const key = canvas.heatmapkey;
        expect(key.colorList.length).tobe(8);
    })
});