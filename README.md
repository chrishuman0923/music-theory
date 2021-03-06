# Music Theory

A simple Node CLI to generate the correct musical scale based on root note and mode specified.

## Get Started

### Setup

1. `git clone https://github.com/chrishuman0923/music-theory.git`
2. `cd music-theory` and `npm install`

### Development

1. `npm start dev` will run the app in development mode and use nodemon to watch the typescript files in `src/` for changes and reload the app.

   **NOTE:** To update the inputs received by the app in development, you can update them at the top of the `src/script.ts` file.

### Test

1. `npm test` will run the defined tests to confirm the app is working correctly.

### Production

1. `npm build` will compile the `.ts` files in `src/` to `.js` files and put them in `dist/`.
2. `npm start` will run the app in production mode and use the built files in `dist/`.

   **NOTE:** Command line arguments should be passed to the application in production. The application takes 2 arguments:

   - `rootNote`: The root note of the scale (e.g. `C`, `Eb`, etc.).
   - `modeIndex`: The mode of the scale. (e.g. `2`, `3`, etc.).

## ToDo

- [ ] Add additional tests to cover the remaining modes.

## Enhancements

- [ ] Show the correct enharmonic notes for the scale rather than showing the enharmonic note pair. (e.g. For the `F major` scale, show `Bb` instead of `A#/Bb`).
- [ ] Allow a user to specify an instrument and the app will show the correctly transposed scale. (e.g. For the `Bb major` scale on the Bb clarinet, show the `C` scale).
- [ ] Add either a light weight web interface or make this a simple Node CLI that accepts arguments when running start script.
