-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: May 08, 2020 at 03:57 PM
-- Server version: 5.7.26
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `Viewstats`
--

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE `agents` (
  `id` int(11) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `imgsrc` varchar(225) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `code_postal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `agents`
--

INSERT INTO `agents` (`id`, `prenom`, `nom`, `email`, `imgsrc`, `ville`, `code_postal`) VALUES
(1, 'Jessica', 'Alberona', 'jalberona@safelife.com', 'assets/fille1.png', 'Beverly Hills', 90102),
(2, 'Antonio', 'Fullbuster', 'afullbuster@safelife.com', 'assets/garcon1.png', 'Paris', 75000),
(3, 'Klyde', 'Green', 'kgreen@safelife.com', 'assets/garcon2.png', 'Tokyo', 8099);

-- --------------------------------------------------------

--
-- Table structure for table `commercants`
--

CREATE TABLE `commercants` (
  `id` int(11) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `revenu_journalier` int(11) NOT NULL,
  `last_update` varchar(50) NOT NULL DEFAULT '1 min ago',
  `imgsrc` varchar(255) NOT NULL DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaK-YOBkvdyPHTBiPhJ-zTaUAkQsoIeMe9N18qR8uUmNqBUFt5&usqp=CAU',
  `ville` varchar(50) NOT NULL,
  `code_postal` int(11) NOT NULL,
  `secteur` varchar(50) NOT NULL,
  `agent_id` int(11) NOT NULL DEFAULT '1',
  `agent_email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `commercants`
--

INSERT INTO `commercants` (`id`, `prenom`, `nom`, `revenu_journalier`, `last_update`, `imgsrc`, `ville`, `code_postal`, `secteur`, `agent_id`, `agent_email`) VALUES
(1, 'Manthita', 'Sakho', 100, '2 hours', 'https://remeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/04/22/node_59653/8711056/public/2019/04/22/B9719335232Z.1_20190422112338_000%2BGOBDELNFL.1-0.jpg?itok=_UTn01WI', 'Beverly Hills', 90210, 'Yachterie de luxe', 1, 'jalberona@safelife.com'),
(2, 'Captain', 'America', 400, '2 minutes', 'assets/captain.jpg', 'New-York', 0, 'Armement contre Thanos', 2, 'afullbuster@safelife.com'),
(3, 'Frodon', 'Saquet', 50, '1 day', 'assets/frodon.jpg', 'The Shire', 12345, 'Joaillerie', 2, 'afullbuster@safelife.com'),
(4, 'Hermione', 'Granger', 200, '1 hour', 'assets/hermione.jpg', 'Hogwarts', 934, 'Alchimie', 3, 'kgreen@safelife.com'),
(5, 'Dayneris', 'Targaryen', 2000, '5 hours', 'assets/Unknown.jpg', 'Kings Landing', 12344, 'Commerce de dragons', 3, 'kgreen@safelife.com'),
(6, 'Levi', 'Ackerman', 799, '37 minutes', 'assets/levi.jpg', 'Paradise Island', 8078, 'Commerce de titans', 1, 'jalberona@safelife.com'),
(7, 'Awesome', 'Beyonce', 5000, '2 hours ago', 'assets/beyonce.jpg', 'Beverly Hills', 90210, 'Commerce de disques Vintage', 3, 'kgreen@safelife.com'),
(8, 'Naruto', 'Uzumaki', 300, '3 days', 'assets/naruto.jpg', 'Konoha', 7680, 'Restauration instantanée - Ramens', 1, 'jalberona@safelife.com'),
(9, 'Itachi', 'Uchiwa', 2000, '13 days', 'assets/itachi.jpg', 'Akatsuki', 66666, 'Vente de Sharingans', 2, 'afullbuster@safelife.com'),
(10, 'Chris', 'Hermsworth', 3000, '15 days', 'assets/chris.jpg', 'Australia', 98000, 'Immobilier', 1, 'jalberona@safelife.com');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `profile` varchar(255) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `prenom`, `nom`, `email`, `profile`, `password`) VALUES
(1, 'admin', 'admin', 'admin@safelife.com', 'admin', 'admin2'),
(2, 'Nick', 'Fury', 'nfury@safelife.com', 'manager', 'marvel'),
(3, 'Albus', 'Dumbledore', 'adumbledore@safelife.com', 'manager', 'griffondor'),
(4, 'Jessica', 'Alberona', 'jalberona@safelife.com', 'agent', '1234'),
(5, 'Antonio', 'Fullbuster', 'afullbuster@safelife.com', 'agent', 'kikou'),
(6, 'Klyde', 'Green', 'kgreen@safelife.com', 'agent', 'mopi'),
(15, 'tet', 'test', 'test@test.fr', 'Agent', 'NewStrongPassworld123!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `commercants`
--
ALTER TABLE `commercants`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD KEY `agent_id` (`agent_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `id` (`id`) USING BTREE;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `commercants`
--
ALTER TABLE `commercants`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
