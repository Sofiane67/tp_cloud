CREATE TABLE clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    lastName VARCHAR(50) NOT NULL,
    firstName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE invoices (
    id INT PRIMARY KEY AUTO_INCREMENT,
    invoiceNumber VARCHAR(50) NOT NULL,
    title VARCHAR(255),
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    paymentDate DATE NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'en attente',
    amount DECIMAL(10, 2) NOT NULL,
    clientId INT NOT NULL,
    FOREIGN KEY (clientId) REFERENCES clients(id)
);

INSERT INTO clients (lastName, firstName, email) VALUES
('Dupont', 'Jean', 'jean.dupont@example.com'),
('Martin', 'Sophie', 'sophie.martin@example.com'),
('Dubois', 'Pierre', 'pierre.dubois@example.com'),
('Lefebvre', 'Marie', 'marie.lefebvre@example.com'),
('Moreau', 'Paul', 'paul.moreau@example.com'),
('Garcia', 'Isabelle', 'isabelle.garcia@example.com'),
('Fournier', 'Thomas', 'thomas.fournier@example.com'),
('Roux', 'Caroline', 'caroline.roux@example.com'),
('Leroy', 'Antoine', 'antoine.leroy@example.com'),
('Girard', 'Catherine', 'catherine.girard@example.com');

INSERT INTO invoices (invoiceNumber, title, paymentDate, amount, clientId) VALUES
('INV2024001', 'Audit de performance', NULL, 150.00, 1),
('INV2024002', 'Développement site vitrine', NULL, 1200.00, 2),
('INV2024003', 'Maintenance système', NULL, 300.00, 3),
('INV2024004', 'Développement site e-commerce', NULL, 2450.00, 4),
('INV2024005', 'Développement application mobile', NULL, 2000.00, 5),
('INV2024006', 'Audit SEO', NULL, 800.00, 6),
('INV2024007', 'Formation en ligne', NULL, 250.00, 7),
('INV2024008', 'Développement site de prise de rendez-vous', NULL, 1500.00, 8),
('INV2024009', 'Maintenance site web', NULL, 350.00, 9),
('INV2024010', 'Conception graphique', NULL, 1800.00, 10);