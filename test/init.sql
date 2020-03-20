CREATE TABLE users (
    id uuid DEFAULT gen_radom_uuid() PRIMARY KEY,
    name character varying(255) NOT NULL,
    age integer NOT NULL,
    marriage boolean NOT NULL DEFAULT false,
    create_at timestamp with zone NOT NULL DEFAULT now(),
    update_at timestamp with zone NOT NULL
)