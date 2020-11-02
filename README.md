# Stardust

Stardust is a responsive fixed-sidebar template made for programmers and artists.

## Table of contents

- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits and License](#Credits)

## Features:
- **Responsive**: Designed to look great on both large-screen and small-screen (mobile) devices.
- **Highly customizable**: Change the entire website colors, social links and icons and sidebar navigation links with the possibility of one sub level with ease.
- **[base16](https://github.com/chriskempson/base16) code syntax highlighting**: This theme also makes use of base16 themes that you can easily change.
- **Galleries**: Useful for displaying your portfolio, ordered by date and filtered by categories.
- **[FlexMansory](https://github.com/gilbitron/flexmasonry)**: For displaying your posts and pieces in a masonry grid layout.
-  **Lightbox**: Useful for your bigger pieces, it can also have the piece’s title, description and a link. Can be used for youtube and vimeo links as well.
- **Smooth page transitions**
- **Cover page**
- **[jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)**: To control SEO.
- **[jekyl-sitemap](https://github.com/jekyll/jekyll-sitemap)**: For better discoverability.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "Stardust"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: Stardust
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install Stardust

## Github Pages

In your `_config.yml` delete the `theme: ` line and add:

```yaml
remote_theme: wildleoknight/stardust
```

You also need to make the following changes in your `Gemfile`:

```Gemfile
# Comment the jekyll gem
# gem "jekyll", "~> 4.1.0"
# Uncomment github-pages
gem "github-pages", group: :jekyll_plugins
```
## Usage

This template makes use of data files so you should copy the `_data` folder. 
You should also copy the folder `_sass` with `constants.scss` and the entire `pages` folder.

### Config

- `title`: Website title, used for SEO.
- `tagline`: Small description used in the sidebar, cover page and SEO.
- `description`: Website description.
- `image`: Website image, used in the sidebar, cover page and SEO.
- `url`: Base url.
- `sidebar_main_text`: Secondary sidebar text.
- `cover_url`: Cover page button link.
- `cover_text`: Cover page button text.
- `author`: Your name, used for SEO.
- `lang`: website's language, used for SEO.

[Click here for aditional parameters](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md) that can be set to use with `jekyll-seo-tag`. 

### Constants

This is the file used to set all the colors in the website, you can also set sidebar related sizes and submenu icons.

```scss
// colors

$primary-highlight: #8f3aff;
$secondary-highlight: #47d163;
$tertiary-highlight: #ff8f3a;


$text-color: #fbfbfc;  
$secondary-text-color: #efeff5;
$secondary-hover-color: #323550;
$sidebar-color: #232538;
$hover-color: #232538;
$table-background-color: #232538;
$background-color: #141520;


// Sizes

$sidebar-width: 300px;
$sidebar-height-min: 100px;
$sidebar-height: 120px;
$social-link-width: 32px;

$sidebar-image-width: 192px;
$sidebar-image-height: 192px;
$sidebar-image-radius: 10%;

$submenu-icon: "▶";

// Syntax highlighting colors
// Base 16 theme
// Scheme: "Snazzy"
// Author: "Chawye Hsu (https://github.com/h404bi) based on Hyper Snazzy Theme (https://github.com/sindresorhus/hyper-snazzy)"
$base00: #282a36;
$base01: #34353e; //Unused
$base02: #43454f;
$base03: #78787e;
$base04: #a5a5a9; //Unused
$base05: #e2e4e5;
$base06: #eff0eb; //Unused
$base07: #f1f1f0; //Unused
$base08: #ff5c57;
$base09: #ff9f43;
$base0A: #f3f99d;
$base0B: #5af78e;
$base0C: #9aedfe;
$base0D: #57c7ff;
$base0E: #ff6ac1;
$base0F: #b2643c; //Unused
```

### Layouts

- **default**: The default layout. Can be filled with `content`.
- **404**: Similar to the default but with less css, used as an error page.
- **landing**: Cover page.
- **post-list**: The list of all the posts who have the front matter attribute listable `true`.
- **post**: The post layout. Used for posts.
- **gallery**: The gallery of all the pieces in `_data\gallery.yml` that have the  same page front matter category.

### Data files

#### Gallery.yml

A collection of all the images you want to show on your galleries, they will appear sorted by date and only the categories specified in the page front matter.

```
- image: /galleryImages/test1.gif
  date: 2020-01-12
  title: "Test title"
  description: "Test description"
  linkurl: /your/url/goes/here
  linktext: "Text link text"
  category: [ all, pixel-art ]
- image: /galleryImages/test2.gif
  date: 2020-01-13
  title: "Test title"
  description: "Test description"
  linkurl: /your/url/goes/here
  linktext: "Text link text"
  category: [ all, illustration ]
```

#### Navigation.yml

A collection of all the links that appear on the sidebar with the possibility of 1 sub level.

```
- title: Portfolio
  url: /Portfolio/
  submenu:
    - title: Everything
      url: /Portfolio/
    - title: Pixel Art
      url: /Portfolio/PixelArt
    - title: Commissions
      url: /Portfolio/Commissions
```

#### Socials.yml

A collection of all the social links on the sidebar.

```
- title: Discord
  url: https://discordapp.com/users/187598543161131009/
  image: /image/path/social.png

- title: Twitter
  url: https://twitter.com/WildLeoKnight
  image: /image/path/social.png

- title: GitHub
  url: https://github.com/wildleoknight
  image: /image/path/social.png
```

### Post Front matter

```
---
layout: post
title: Post title
description: Post description
permalink: /projects/post-title
urls:
    source: https://project.source/link/
    download: https://project.download/link/
images: 
    cover: /assets/image-for-front-page.png
    top: /assets/image-for-top-of-post.png 
tags: [tags, which, relate, to, post]
listable: true | false
mathjax: true | false
---
```

### Gallery Front matter

```
---
layout: gallery
permalink: /gallery
title: Gallery Title
category: [ category1, category2, ...]
---
```

### Favicon

Simply add your favicon `favicon.ico` to the root of your site.

### Lazy loading

In order to enable lazy loading on an image you must add a `data-echo` attribute like so:

```html
<img src="/assets/placeholder-for-image.png" alt="alt-text" data-echo="/assets/actual-image.png" />
```

### Image lightbox

In order to open an image in a fullscreen lightbox on click, you must wrap the image in a link tag, but I do recommend wrapping it with a div tag with the class `clickable-image` like so: 

```html
<div class="clickable-image"><a href="/assets/actual-image.png">
    <img src="/assets/placeholder-for-image.png" alt="alt-text" data-echo="/assets/actual-image.png" />
</a></div>
```

### Cache busting

Cache busting is being used by default on this theme's css/js and gallery but if you want to have it aswell on your images/js you must have the src/href like so:

```html
<a href="/assets/actual-image.png?{{ site.time | date: '%s%N' }}"></a>
```

## Credits

This theme was not made *entirely* from scratch, it was based on **[arco](https://github.com/meebuhs/arco)**. The base16 theme used by default is **[Snazzy](https://github.com/chawyehsu/base16-snazzy-scheme)**.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
