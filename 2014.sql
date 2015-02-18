-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2015 年 2 朁E18 日 08:38
-- サーバのバージョン： 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `2014`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `member_imfo`
--

CREATE TABLE IF NOT EXISTS `member_imfo` (
`id` int(10) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `group` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `userid` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- テーブルのデータのダンプ `member_imfo`
--

INSERT INTO `member_imfo` (`id`, `firstname`, `lastname`, `group`, `mail`, `userid`, `password`) VALUES
(1, 'gai', 'yamada', 'kandai', 'gai073014@gmail.com', 'yamada', '$2y$10$BrqLjj3fqiQJaSNc544C0exqjK8LCCoiWkyBHtUwqZ8beyth2t8MO'),
(2, 'yamada', 'gai', 'kandai', 'gai@gmail.com', 'yamada', '$2y$10$ImOhC/1MVyMDsxm/86iqfOypS9DgUdxTbJWlrG7abvzwFx6tlOcTK'),
(3, 'yamada', 'gai', 'kansai', 'gai073014@gmail.com', 'gai', '$2y$10$YPooa4zAAICehkKwQa6hzuuxUFHvAQedBM6SfYudX/2rWVSg7OHqK'),
(4, 'gai', 'gai', 'kandai', 'gai@gmail.com', 'gai', '$2y$10$kniCLLFGN/hk1auEY50j7ejPxguwDTdPkzcMzOsNYx/1KmUFuBK9a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `member_imfo`
--
ALTER TABLE `member_imfo`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `member_imfo`
--
ALTER TABLE `member_imfo`
MODIFY `id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
