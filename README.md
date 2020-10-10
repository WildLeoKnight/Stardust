# Stardust

Welcome to your new Jekyll theme! In this directory, you'll find the files you need to be able to package up your theme into a gem. Put your layouts in `_layouts`, your includes in `_includes`, your sass files in `_sass` and any other assets in `assets`.

To experiment with this code, add some sample content and run `bundle exec jekyll serve` – this directory is setup just like a Jekyll site!

TODO: Delete this and the text above, and describe your gem


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

TODO: Write usage instructions here. Describe your available layouts, includes, sass and/or assets.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `Stardust.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

