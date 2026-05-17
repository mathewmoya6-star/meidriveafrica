import esbuild from 'esbuild';
import fs from 'fs';

// Create dist folder
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
}

// Build React app with esbuild
await esbuild.build({
    entryPoints: ['src/main.jsx'],
    bundle: true,
    outfile: 'dist/bundle.js',
    platform: 'browser',
    format: 'iife',
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    loader: { '.jsx': 'jsx', '.js': 'jsx' },
    define: {
        'process.env.NODE_ENV': '"production"'
    },
    minify: true
});

// Copy HTML files
const files = ['index.html', 'admin-login.html', 'admin-dashboard.html', 'course.html', 'dashboard.html'];
files.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, `dist/${file}`);
        console.log(`✅ Copied: ${file}`);
    }
});

// Copy CSS
if (fs.existsSync('src/index.css')) {
    fs.copyFileSync('src/index.css', 'dist/index.css');
}

console.log('✅ Build complete! Output in /dist');
