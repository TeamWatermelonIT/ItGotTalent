<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users = User::all();
        foreach($users as $user){
            echo 'Name: ' . $user->name . '</br>';
            echo 'Password: ' . $user->password . '</br>';
            echo 'Email: ' . $user->email . '</br>';
            echo 'Gender: ' . $user->gender . '</br>';
            echo 'DateOfBirth: ' . $user->dateOfBirth . '</br>';
            echo '<img src="' . $user->photoUrl . '"/>' . '</br>';
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::where('id', $id)->get()->first();
        echo 'Name: ' . $user->name . '</br>';
        echo 'Password: ' . $user->password . '</br>';
        echo 'Email: ' . $user->email . '</br>';
        echo 'Gender: ' . $user->gender . '</br>';
        echo 'DateOfBirth: ' . $user->dateOfBirth . '</br>';
        echo '<img src="' . $user->photoUrl . '"/>' . '</br>';
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
