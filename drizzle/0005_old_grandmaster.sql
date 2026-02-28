ALTER TABLE `deals` ADD `redfinUrl` text;--> statement-breakpoint
ALTER TABLE `deals` ADD `askingPrice` decimal(12,2);--> statement-breakpoint
ALTER TABLE `deals` ADD `estVsList` decimal(8,4);--> statement-breakpoint
ALTER TABLE `deals` ADD `county` varchar(100);--> statement-breakpoint
ALTER TABLE `deals` ADD `aboutThisHome` text;--> statement-breakpoint
ALTER TABLE `deals` ADD `source` varchar(255);--> statement-breakpoint
ALTER TABLE `deals` ADD `notes` text;--> statement-breakpoint
ALTER TABLE `deals` ADD `lat` decimal(10,7);--> statement-breakpoint
ALTER TABLE `deals` ADD `lng` decimal(10,7);