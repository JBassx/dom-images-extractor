'use strict';
import findImagesFrom from '../src/index';

test('get img src urls', () => {
    const DOMEl = document.createElement('div');
    DOMEl.innerHTML ='  <img src="https://giuseppeciullo.it/example.jpg" />' +
    '<img src="https://giuseppeciullo.it/example2.png" />'+
    '<div></div>';

    const images = findImagesFrom(DOMEl);
    expect(images).toEqual(["https://giuseppeciullo.it/example.jpg","https://giuseppeciullo.it/example2.png"]);
});

test('get background images urls', () => {
    const DOMEl = document.createElement('div');
    DOMEl.innerHTML ='<div style="background-image:url(https://giuseppeciullo.it/example.jpg)">' +
    '<div></div>';

    const images = findImagesFrom(DOMEl);
    expect(images).toEqual(["https://giuseppeciullo.it/example.jpg"]);
});

test('pass non-dom element', () => {
    const images = findImagesFrom(null);
    expect(images).toEqual(false);
});