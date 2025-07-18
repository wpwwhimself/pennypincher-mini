<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class SetUpUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:set-up-user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Upserts access user and defines their password';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->comment('Setting up user...');

        $password = $this->secret('Password');
        User::updateOrCreate(["name" => "archmage"], [
            "password" => Hash::make($password),
        ]);

        $this->comment('User set up.');
    }
}
