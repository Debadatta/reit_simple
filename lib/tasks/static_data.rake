namespace :static_data do
  desc "Create user interests options"
  task user_interests: :environment do
    ['Buying Properties', 'Selling Properties', 'Inviting Clients as a Broker or Agent'].each do |title|
      UserInterest.where(title: title).first_or_create
    end
  end

  desc "Create user reference options"
  task user_refs: :environment do
    ["Friend", "Article", "Google", "Listen Money Matters", "Investor Junkie", "Email", "Postcard or Letter", "Loopnet", "Event", "Radio", "Podcast", "Online Ad", "Facebook", "LinkedIn", "Twitter", "Tenant Purchase", "Referral from Broker", "Referral from Property Manager", "Other"].each do |title|
      UserRef.where(title: title).first_or_create
    end
  end
end
