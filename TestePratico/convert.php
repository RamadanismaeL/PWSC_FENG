<!-- convert.php -->
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado da Conversão</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1 class="mb-5">Resultado da Conversão</h1>
        <div class="converter-result mx-auto">
            <?php
                if ($_SERVER["REQUEST_METHOD"] == "POST") {
                    $weight = floatval($_POST["weight"]);
                    $unit = $_POST["unit"];

                    $grams = 0;
                    $kilograms = 0;
                    $pounds = 0;

                    switch ($unit) {
                        case "gramas":
                            $grams = $weight;
                            $kilograms = $weight / 1000;
                            $pounds = $weight * 0.00220462;
                            break;
                        case "quilogramas":
                            $grams = $weight * 1000;
                            $kilograms = $weight;
                            $pounds = $weight * 2.20462;
                            break;
                        case "libras":
                            $grams = $weight / 0.00220462;
                            $kilograms = $weight / 2.20462;
                            $pounds = $weight;
                            break;
                    }

                    echo "<p>$weight $unit é equivalente a:</p>";
                    echo "<p>" . number_format($grams, 2) . " gramas</p>";
                    echo "<p>" . number_format($kilograms, 2) . " quilogramas</p>";
                    echo "<p>" . number_format($pounds, 2) . " libras</p>";
                } else {
                    echo "<p>Dados inválidos fornecidos.</p>";
                }
            ?>
            <p><a href="index.html" class="back-link">Voltar</a></p>
        </div>
    </div>
</body>
</html>
