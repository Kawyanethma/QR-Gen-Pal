# QR Gen Pal

A modern QR Code Generator built with Angular and PrimeNG. Generate QR codes for any text, URL, or data with a beautiful, responsive interface.

![QR Gen Pal Application](https://github.com/user-attachments/assets/fe369496-8b1a-4c80-8750-63b6c887518c)

## Features

- ✨ **Modern UI**: Clean, professional interface with PrimeNG components
- 🎨 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Real-time Generation**: Instant QR code generation as you type
- 📱 **Multiple Formats**: Support for URLs, text, contact info, and more
- 💾 **Download Support**: Download generated QR codes as PNG images
- 🎯 **User-friendly**: Intuitive interface with helpful placeholders and tooltips

## Technologies Used

- **Angular 20** - Modern web framework with standalone components
- **PrimeNG** - Rich UI component library
- **QRCode.js** - QR code generation library
- **TypeScript** - Type-safe development
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kawyanethma/QR-Gen-Pal.git
cd QR-Gen-Pal
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The built application will be available in the `dist/` directory.

## Usage

1. **Enter Text/URL**: Type or paste any text, URL, or data into the input field
2. **Generate QR Code**: Click the "Generate QR Code" button
3. **Download**: Click "Download PNG" to save the QR code to your device
4. **Clear**: Use the "Clear" button to reset and start over

### Supported Data Types

- 🌐 **URLs**: `https://example.com`
- 📝 **Plain Text**: `Hello, World!`
- 📧 **Email**: `mailto:user@example.com`
- 📞 **Phone**: `tel:+1234567890`
- 📱 **SMS**: `sms:+1234567890`
- 🔗 **WiFi**: `WIFI:T:WPA;S:NetworkName;P:password;;`

## Project Structure

```
src/
├── app/
│   ├── qr-generator/          # QR Generator component
│   │   ├── qr-generator.ts    # Component logic
│   │   ├── qr-generator.html  # Template
│   │   └── qr-generator.css   # Styling
│   ├── app.ts                 # Root component
│   ├── app.config.ts          # Application configuration
│   └── app.routes.ts          # Routing configuration
├── styles.css                 # Global styles
└── index.html                 # Main HTML file
```

## Development

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

### Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

### Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/Kawyanethma/QR-Gen-Pal/issues) on GitHub.