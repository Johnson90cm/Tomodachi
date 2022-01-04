export function randomStatGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}