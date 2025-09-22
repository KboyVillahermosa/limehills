$d = Get-Content -Raw -Path "src/chat/companyData.json" | ConvertFrom-Json
$tests = @()
$tests += [PSCustomObject]@{ name = 'simple'; message = 'hi' }
$tests += [PSCustomObject]@{ name = 'description'; message = $d.description }
$tests += [PSCustomObject]@{ name = 'long'; message = ('x' * 10000) }

foreach ($t in $tests) {
	Write-Host "--- Test: $($t.name) ---"
	$body = @{ message = $t.message } | ConvertTo-Json
	try {
		$resp = Invoke-RestMethod -Uri "http://localhost:5174/api/chat" -Method POST -ContentType "application/json" -Body $body -TimeoutSec 30
		Write-Host "Status: 200"
		$resp | ConvertTo-Json -Depth 5 | Write-Host
	} catch {
		Write-Host "Error: $($_.Exception.Message)"
		if ($_.Exception.Response) {
			$r = $_.Exception.Response
			$sr = New-Object System.IO.StreamReader($r.GetResponseStream())
			$text = $sr.ReadToEnd()
			Write-Host "Response body: $text"
		}
	}
}
