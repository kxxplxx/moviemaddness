import { createClient } from '@supabase/supabase-js'


const password = '6StsiKe8!nbSqAP';
const supabase = createClient('https://tjzcsnakigzsmsxczdua.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqemNzbmFraWd6c21zeGN6ZHVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4ODY1NDksImV4cCI6MjAzODQ2MjU0OX0.6ItMGDCdhAz8YUACOex42UzNSyKoHFUjdAsGFZaF7BY')


export default supabase;