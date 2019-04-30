namespace :start do
  desc 'Start dev server'
  task :development do
    exec 'foreman start -f Procfile.dev'
  end

  desc 'Start production server'
  task :production do
    exec ' npm run postinstall && foreman start'
  end
end

desc 'Start development server'
task :start => 'start:development'
