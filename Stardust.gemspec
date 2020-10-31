# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "Stardust"
  spec.version       = "1.0.0"
  spec.authors       = ["Leonardo 'WildLeoKnight' Lourenco"]
  spec.email         = ["wildleoknight@gmail.com"]

  spec.summary       = "A fixed sidebar,jekyll theme for artists and programmers."
  spec.homepage      = "https://github.com/wildleoknight/stardust"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
