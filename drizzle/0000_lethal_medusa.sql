CREATE TABLE `inquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type` varchar(32) NOT NULL,
	`data` text NOT NULL,
	`status` enum('new','contacted','booked','archived') NOT NULL DEFAULT 'new',
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `inquiries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `subscribers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `subscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `subscribers_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`openId` varchar(64) NOT NULL,
	`name` text,
	`email` varchar(320),
	`loginMethod` varchar(64),
	`role` enum('user','admin') NOT NULL DEFAULT 'user',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`lastSignedIn` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_openId_unique` UNIQUE(`openId`)
);
--> statement-breakpoint
CREATE TABLE `rental_agreements` (
	`id` int AUTO_INCREMENT NOT NULL,
	`renter_name` text NOT NULL,
	`date_of_agreement` timestamp NOT NULL DEFAULT (now()),
	`drivers_license` varchar(255) NOT NULL,
	`license_state_country` varchar(255) NOT NULL,
	`date_of_birth` varchar(255) NOT NULL,
	`phone` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`flight_number` varchar(255),
	`address` text NOT NULL,
	`city_state_zip` varchar(255) NOT NULL,
	`vehicle_year_make_model` text NOT NULL,
	`color` varchar(255) NOT NULL,
	`vin` varchar(255) NOT NULL,
	`license_plate` varchar(255) NOT NULL,
	`pickup_date` timestamp NOT NULL,
	`pickup_time` varchar(255) NOT NULL,
	`pickup_location` text NOT NULL,
	`return_date` timestamp NOT NULL,
	`return_time` varchar(255) NOT NULL,
	`return_location` text NOT NULL,
	`odometer_out` int NOT NULL,
	`odometer_in` int,
	`fuel_out` varchar(255) NOT NULL,
	`fuel_in` varchar(255),
	`daily_rate` varchar(255) NOT NULL,
	`total_days` int NOT NULL,
	`subtotal` varchar(255) NOT NULL,
	`tax` varchar(255) NOT NULL,
	`discount_applied` varchar(255),
	`total_charged` varchar(255) NOT NULL,
	`security_deposit_hold` varchar(255) NOT NULL,
	`stripe_receipt_id` varchar(255),
	`additional_driver_name` text,
	`additional_driver_dob` varchar(255),
	`additional_driver_license` varchar(255),
	`additional_driver_license_state_country` varchar(255),
	`additional_driver_phone` varchar(255),
	`additional_driver_relationship` varchar(255),
	`renter_signature` text NOT NULL,
	`owner_signature` text,
	`signed_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `rental_agreements_id` PRIMARY KEY(`id`)
);
