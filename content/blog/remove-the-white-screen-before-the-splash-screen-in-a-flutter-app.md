---
path: Remove-White-Screen-Before-Splash-Screen-Flutter-App
date: 2021-10-21T09:47:50.057Z
title: Remove the White Screen Before the Splash Screen in a Flutter App
description: By default, iOS and Android show a native loading screen before the
  splash screen of a Flutter app is displayed. This default screen is completely
  white, which means your app will have a white "flash" before showing your
  custom splash screen with your app's chosen colours and logo, making for a bad
  user experience. It is currently not possible to remove this native screen, but we can
  customise it to make it less intrusive.
categories: ["Flutter", "iOS", "Android"]
image: /assets/white-screen-feature.jpg
---
### Why is there a white screen before the splash screen?

By default, both iOS and Android show a native loading screen before the splash screen of a Flutter app is displayed. This default screen is completely white which means your app will have a white "flash" before showing your custom splash screen in your app's chosen colours and logo, making for a bad user experience. It is currently not possible to remove this native screen, but we can customise it to make it less intrusive.

### How to customise the white screen

The white screen is native to the platform (Android and iOS) so it can't just be removed. Fortunately, both platforms provide the ability to set the background colour of this screen. Doing this means the extra screen can be incorporated into the loading process of your app without sticking out like a sore thumb or being perceived as a flaw by the user.

### Adjusting the native loading screen on Android

To hide the flashing white screen in Android, we need to modify the **styles.xml** file found in *android/app/src/res/values/styles.xml*

Two values may need to be adjusted in **styles.xml** to hide the extra screen. Firstly we can modify the look of the white default screen to fit in with our app design, secondly we adjust the time between hiding that newly customized splash screen and showing the first screen of your app. 

To make things simple for us these settings allow values from the [Drawable](https://developer.android.com/guide/topics/resources/drawable-resource) options as well as project variable values. This feature makes it easy to use the main splash screen of your app (usually stored in *@drawable/splash*) to style the colour of the formerly white screen.

Here is an example of what **styles.xml** could look like:

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <!-- Theme applied to the Android Window (previously white screen) while the process is starting when the OS's Dark Mode setting is off -->
    <style name="LaunchTheme" parent="@android:style/Theme.Light.NoTitleBar">
        <!-- Show a Drawable splash screen on the activity. Automatically removed when
             Flutter draws its first frame -->
        <item name="android:windowBackground">@drawable/splash</item>
    </style>
    <!-- Theme applied to the Android Window as soon as the process has started.
         This theme determines the color of the Android Window while your
         Flutter UI initializes, as well as behind your Flutter UI while its
         running.
         
         This Theme is only used starting with V2 of Flutter's Android embedding. -->
    <style name="NormalTheme" parent="@android:style/Theme.Light.NoTitleBar">
        <item name="android:windowBackground">?android:colorBackground</item>
    </style>
</resources>
```

Finally, to finish the setup we need to add references to the **AndroidManifest.xml** file:

```xml
<application
  .....
  <activity
    android:name=".MainActivity"
    android:theme="@style/LaunchTheme"
    <!-- Specifies an Android theme to apply to this Activity as soon as
         the Android process has started. This theme is visible to the user
         while the Flutter UI initializes. After that, this theme continues
         to determine the Window background behind the Flutter UI. -->
    <meta-data
      android:name="io.flutter.embedding.android.NormalTheme"
      android:resource="@style/NormalTheme"
      />
    <!-- Displays an Android View that continues showing the launch screen
         Drawable until Flutter paints its first frame, then this splash
         screen fades out. A splash screen is useful to avoid any visual
         gap between the end of Android's launch screen and the painting of
         Flutter's first frame. -->
    <meta-data
      android:name="io.flutter.embedding.android.SplashScreenDrawable"
      android:resource="@drawable/splash"
      />
  </activity>
</application>
```

These settings both hide the flashing white screen and set the Android app initialization timings up for a seamless user experience.

### iOS

The iOS solution to hide the extra white screen is quite simple and can be done in one of two places.

The first way of doing this is directly in the iOS *Storyboard** file if you prefer not to work in XCode:

Open up **LaunchScreen.storyboard** found in *ios/Runner/Base.Iproj*. This file contains a tag called **"color"** with a key of "backgroundColor" and attributes red, green, blue and alpha numbers. All of these values are set to 1 by default (resulting in the RGB code for white).

The trick with editing this file directly is that the values need to be decimals between 0 and 1. If your app specifications are set up in standard RGB colour codes, you need to divide them by 255 to get the equivalent decimal values.

Here's what the "color" tag in the **LaunchScreen.storyboard** looked like for and app I worked on:

```xml
<color 
 key="backgroundColor" 
 red="0.019607843137254902" 
 green="0.55000000000000004" 
 blue="0.66000000000000003" 
 alpha="1" 
 colorSpace="custom" 
 customColorSpace="sRGB"
/>
```

The second option to change the colour of the splash screen in XCode:

Open up your Flutter app in XCode and navigate to the LaunchScreen ViewController View node (see path below).

![Fix-Flutter-White-Screen-Before-Splash-iOS](/assets/screen-shot-2021-10-21-at-9.18.04-pm.png "Fix-Flutter-White-Screen-Before-Splash-iOS")

On the right hand side under **properties**, you will find the background attribute. Clicking on this and choosing *custom* will allow you to define the RGB value to override the white screen.

After following these steps, your app will now no longer show the annoying white screen on either Android or iOS. This rather simple changes make for a more professional look and overall a smoother user experience.