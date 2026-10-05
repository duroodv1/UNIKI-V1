# Bina pakej native UNIKI V.1 · v1.2.1

Wrapper Capacitor untuk Android dan shell Electron untuk desktop membungkus PWA local-first yang sama. Ia tidak menambah backend, cloud sync atau payment gateway.

## Android APK

Keperluan untuk build semula: Windows/macOS/Linux, Node.js 20+, JDK 17, Android SDK Platform 34 dan Build Tools 34. Android Studio pilihan untuk emulator dan signing. Tetapkan `ANDROID_HOME` (atau `ANDROID_SDK_ROOT`) ke folder Android SDK.

Projek native `android/` telah dijana dan disertakan. Dari root projek:

```bash
npm install
npm run android:apk:debug
```

APK hasil build disalin ke `release/android/UNIKI-V1-v1.2.1-debug.apk` (salinan Gradle asal: `android/app/build/outputs/apk/debug/app-debug.apk`). Ia bertandatangan **debug key**, sesuai untuk ujian/pemasangan dalaman sahaja — bukan keluaran Play Store. Uji pada peranti sebenar; APK ini belum diuji melalui emulator/peranti dalam persekitaran binaan.

Jika memulakan daripada PWA yang belum mempunyai `android/`, jana platform sekali dengan `npm run android:add`, kemudian gunakan arahan build di atas. Jangan jalankan `android:add` semula pada projek yang sudah mempunyai folder `android/`.

Untuk release bertandatangan, sediakan keystore milik organisasi secara peribadi dan gunakan signing config Gradle (jangan commit key/password). `npm run android:apk:release` tanpa signing config organisasi akan menghasilkan release APK yang belum sesuai diedarkan.

## Windows EXE + Inno Setup

Windows x64 Electron app telah dipaketkan. Fail `UNIKI.exe` dan DLL/resource wajibnya, bersama `inno/UNIKI.iss`, dibekalkan dalam:

`release/UNIKI-V1-Windows-x64-Inno-Input-v1.2.1.tar.xz`

Pada Windows, extract arkib menggunakan 7-Zip atau `tar`, contohnya dari root folder projek:

```powershell
tar -xJf .\release\UNIKI-V1-Windows-x64-Inno-Input-v1.2.1.tar.xz -C .
```

Arkib meletakkan executable di `release/UNIKI-win32-x64/UNIKI.exe` dan installer source di `inno/`. Pasang Inno Setup 6, kemudian jalankan `inno/build-windows.bat` atau buka `inno/UNIKI.iss` dengan Inno Setup Compiler dan tekan **Compile**. Hasilnya `release/UNIKI-Setup-1.2.1-x64.exe`.

Untuk bina semula app daripada source pada Windows 10/11 x64, pastikan Node.js 20+ dipasang. Dari root projek:

```powershell
npm install
npm run desktop:package:win
```

Selepas itu compile Inno dengan `inno/build-windows.bat`. `UNIKI.exe` tunggal bukan portable app lengkap; gunakan seluruh folder Electron atau installer Inno. APK Android tidak menggunakan Inno Setup.

## Nota penting

- Status build setakat ini: APK debug berjaya dibina dan disahkan tandatangannya; Windows x64 Electron app berjaya dipaketkan. Installer Inno belum dikompilasi kerana Inno Setup Compiler tiada dalam persekitaran binaan ini.
- Windows installer belum code-signed. SmartScreen boleh memberi amaran sehingga organisasi menandatangani pemasang dengan sijil code-signing dipercayai.
- APK dan Windows build menyimpan database berasingan pada setiap peranti/komputer. Import/restore daripada backup tersulit ialah pemindahan manual; peer/network sync belum diaktifkan.
- Untuk penerbitan Play Store, cipta signing key organisasi, semak `applicationId`, privacy notice, target SDK, versionCode, release signing dan ujian peranti sebenar.
