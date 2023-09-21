CREATE TABLE IF NOT EXISTS "cxtnipp_user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text NOT NULL,
	"image" text,
	"password" text NOT NULL
);
