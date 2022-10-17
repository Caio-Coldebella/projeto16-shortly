--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: authorizations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.authorizations (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: authorizations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.authorizations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: authorizations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.authorizations_id_seq OWNED BY public.authorizations.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    url text NOT NULL,
    "shortUrl" text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: userUrls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public."userUrls" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "urlId" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: userUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."userUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: userUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."userUrls_id_seq" OWNED BY public."userUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: authorizations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authorizations ALTER COLUMN id SET DEFAULT nextval('public.authorizations_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: userUrls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userUrls" ALTER COLUMN id SET DEFAULT nextval('public."userUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: authorizations; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.authorizations VALUES (1, 4, '7ef52ddf-416f-4447-b748-347482506bd1', '2022-10-13 16:30:19.092311');
INSERT INTO public.authorizations VALUES (3, 5, '8031c6a5-cc08-407b-aaf8-b1c239cad5d7', '2022-10-17 11:36:41.935614');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (14, 'https://ge.globo.com/', '5wK3XDnN', 2, '2022-10-13 18:12:32.235547');
INSERT INTO public.urls VALUES (17, 'https://moodle.unicamp.br/', 'cWLFQt-a', 0, '2022-10-17 11:38:06.008797');
INSERT INTO public.urls VALUES (19, 'https://github.com/Caio-projeto16shortly', 'TpCzw1sf', 2, '2022-10-17 14:46:15.622366');
INSERT INTO public.urls VALUES (18, 'https://github.com/projeto16shortly', 'c5nVk-V9', 3, '2022-10-17 14:46:09.306331');


--
-- Data for Name: userUrls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public."userUrls" VALUES (4, 4, 14, '2022-10-13 18:12:32.421926');
INSERT INTO public."userUrls" VALUES (6, 5, 17, '2022-10-17 11:38:06.035879');
INSERT INTO public."userUrls" VALUES (7, 4, 18, '2022-10-17 14:46:09.333437');
INSERT INTO public."userUrls" VALUES (8, 4, 19, '2022-10-17 14:46:15.651515');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (3, 'Caio Ruiz Coldebella', 'caioruiz102011@hotmail.com', '$2b$10$Ojq0FfBEUoyBYBxjXrTGJO671rmTbbP5xjmkXNqOOpNqs.8rv28NG', '2022-10-12 21:48:32.952406');
INSERT INTO public.users VALUES (4, 'Caio Ruiz Coldebella', 'caioruiz@email.com', '$2b$10$D2fq6N1zP2jga7ftri9F8.0Seu1AY9m7xtOPOWC9sByFxVagTC90.', '2022-10-12 21:58:45.486826');
INSERT INTO public.users VALUES (5, 'João', 'joao@driven.com.br', '$2b$10$3nJVLWOfWQbpoY9DLd1dU.KJ1XDeJr2085fKH1.Gs6xEhpST3rbVG', '2022-10-17 11:36:13.0589');


--
-- Name: authorizations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.authorizations_id_seq', 3, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 19, true);


--
-- Name: userUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."userUrls_id_seq"', 8, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: authorizations authorizations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authorizations
    ADD CONSTRAINT authorizations_pkey PRIMARY KEY (id);


--
-- Name: authorizations authorizations_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authorizations
    ADD CONSTRAINT authorizations_token_key UNIQUE (token);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: urls urls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: urls urls_url_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_url_key UNIQUE (url);


--
-- Name: userUrls userUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userUrls"
    ADD CONSTRAINT "userUrls_pkey" PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: authorizations authorizations_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.authorizations
    ADD CONSTRAINT "authorizations_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: userUrls userUrls_urlId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userUrls"
    ADD CONSTRAINT "userUrls_urlId_fkey" FOREIGN KEY ("urlId") REFERENCES public.urls(id);


--
-- Name: userUrls userUrls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public."userUrls"
    ADD CONSTRAINT "userUrls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

